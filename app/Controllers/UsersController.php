<?php

namespace App\Controllers;

use App\Libraries\CI4JWT\CI4JWT;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

use App\Models\UsersModel;

use Config\Services;

class UsersController extends ResourceController
{
    use ResponseTrait;

    public function login()
    {
        $request = Services::request();

        $rules = [
            "username" => [
                "label" => "Username",
                "rules" => "trim|required",
            ],
            "password" => [
                "label" => "Password",
                "rules" => "trim|required",
            ]
        ];

        if (!$this->validate($rules)) :

            helper('custom_helper');

            $response_code = ResponseInterface::HTTP_BAD_REQUEST;

            return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'message' => "Validation Failed.",
                        'errors' => validationErrors($this->validator->getErrors())
                    ]
                )
                ->setStatusCode($response_code);

        endif;

        $usersModel = new UsersModel();

        $username = $request->getVar('username');
        $password = $request->getVar('password');

        $userdata = $usersModel->where("username", $username)->first();

        // Check if user exists
        if (!$userdata) :

            $response_code = ResponseInterface::HTTP_NOT_FOUND;

            return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'message' => "User Not Found.",
                    ]
                )
                ->setStatusCode($response_code);

        endif;

        // Check if pin matches
        if (!password_verify($password, $userdata['password'])) :

            $response_code = ResponseInterface::HTTP_UNAUTHORIZED;

            return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'message' => "Invalid Credentials.",
                    ]
                )
                ->setStatusCode($response_code);

        endif;

        // Success

        $jwt = new CI4JWT();

        $tokenPayload = [
            'username' => $username
        ];

        $data = [
            'status' => 'SUCCESS',
            'code' => 200,
            'user_token' => $jwt->generateToken(60, $tokenPayload),
            'refresh_token' => $jwt->generateToken(90, $tokenPayload)
        ];

        $response_code = ResponseInterface::HTTP_OK;

        return Services::response()
            ->setJSON($data)
            ->setStatusCode($response_code);
    }
}
