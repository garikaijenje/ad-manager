<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

use App\Models\SlotsModel;
use App\Models\AdsModel;

use Config\Services;
use Exception;

class SlotsController extends ResourceController
{

    use ResponseTrait;

    public function getSlots(){

        $model = new SlotsModel();

        try {
            $slots = $model->findAll();

            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
            ->setJSON([
                'status' => 'SUCCESS',
                'code' => $response_code,
                'data' => $slots
            ])
            ->setStatusCode($response_code);

        } catch (\Exception $e) {

            $response_code = ResponseInterface::HTTP_INTERNAL_SERVER_ERROR;

            return Services::response()
            ->setJSON([
                'status' => 'FAIL',
                'code' => $response_code,
                'message' => $e->getMessage()
            ])
            ->setStatusCode($response_code);

        }

    }

    public function getSlot($id){
        
        $model = new SlotsModel();

        try {

            $slot = $model->find($id);

            if (!$slot) {

                $response_code = ResponseInterface::HTTP_NOT_FOUND;

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'FAIL',
                            'code' => $response_code,
                            'message' => "Slot Not Found.",
                        ]
                    )
                    ->setStatusCode($response_code);
            } else {

                $response_code = ResponseInterface::HTTP_OK;

                $url = base_url();

                // Add stuff to payload
                $slot[0]['code_slot'] = "&lt;div class='fumigationsolutionsads' data-ad-slot='{$id}'&gt;&lt;/div&gt;";
                $slot[0]['code_script'] = "&lt;script type='text/javascript' src='{$url}/load-ads.js'&gt;&lt;/script&gt;";

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'SUCCESS',
                            'code' => $response_code,
                            'data' => $slot[0],
                        ]
                    )
                    ->setStatusCode($response_code);
            }
        } catch (Exception $e) {

            $response_code = ResponseInterface::HTTP_INTERNAL_SERVER_ERROR;

            return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'message' => $e->getMessage(),
                    ]
                )
                ->setStatusCode($response_code);
        }
    }

    public function addSlot()
    {
        $request = Services::request();
        helper('custom_helper');

        $rules = [
            "name" => [
                "label" => "Slot Name",
                "rules" => "trim|required|max_length[50]|is_unique[slots.name]",
                'errors' => [
                    'is_unique' => 'Slot Name already exists in the database.',
                ]
            ]
        ];

        if (!$this->validate($rules)) :

            $response_code = ResponseInterface::HTTP_BAD_REQUEST;

            return Services::response()
            ->setJSON(
                [
                    'status' => 'FAIL',
                    'code' => $response_code,
                    'errors' => validationErrors($this->validator->getErrors())
                ]
            )
            ->setStatusCode($response_code);

        endif;

        $slotsModel = new SlotsModel();

        $name = $request->getVar('name');

        $formData = [
            'name' => esc($name),
        ];

        try {

            $slotsModel->save($formData);
            
            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
                ->setJSON([
                'status' => 'SUCCESS',
                'code' => $response_code,
                'message' => 'Slot Successfully Added.'
                ])
                ->setStatusCode($response_code);

        } catch (Exception $e) {

            $response_code = ResponseInterface::HTTP_INTERNAL_SERVER_ERROR;

            return Services::response()
            ->setJSON([
            'status' => 'FAIL',
            'code' => $response_code,
            'message' => $e->getMessage()
            ])
            ->setStatusCode($response_code);

        }

    }

    public function updateSlot($id)
    {
        $request = Services::request();
        $slotsModel = new SlotsModel();

        $rules = [
            "name" => [
                "label" => "Slot Name",
                "rules" => "trim|required|max_length[50]",
                'errors' => [
                    'is_unique' => 'Slot Name already exists in the database.',
                ]
            ]
        ];

        if (!$this->validate($rules)) :

            $response_code = ResponseInterface::HTTP_BAD_REQUEST;

            return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'errors' => $this->validator->getErrors()
                    ]
                )
                ->setStatusCode($response_code);

        endif;


        // Try to find the slot
        $slot = $slotsModel->find($id);

        if (!$slot) {

            $response_code = ResponseInterface::HTTP_NOT_FOUND;

            return Services::response()
            ->setJSON(
                [
                    'status' => 'FAIL',
                    'code' => $response_code,
                    'message' => "Slot Not Found.",
                ]
            )
                ->setStatusCode($response_code);
        }

        $name = $request->getVar('name');

        $slot = $slot[0];
        
        $formData = [
            "id" => $slot['id'],
            'name' => esc($name)
        ];

        try {

	        // Slot Appliance
            $slotsModel->save($formData);

            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
                ->setJSON([
                    'status' => 'SUCCESS',
                    'code' => $response_code,
                    'message' => 'Slot Successfully Updated.'
                ])
                ->setStatusCode($response_code);
        } catch (Exception $e) {

            $response_code = ResponseInterface::HTTP_INTERNAL_SERVER_ERROR;

            return Services::response()
                ->setJSON([
                    'status' => 'FAIL',
                    'code' => $response_code,
                    'message' => $e->getMessage()
                ])
                ->setStatusCode($response_code);
        }
    }

    public function deleteSlot($id)
    {
        
        $model = new SlotsModel();

        try {

            $slot = $model->find($id);

            if (!$slot) {

                $response_code = ResponseInterface::HTTP_NOT_FOUND;

                return Services::response()
                ->setJSON(
                    [
                        'status' => 'FAIL',
                        'code' => $response_code,
                        'message' => "Slot Not Found.",
                    ]
                )
                ->setStatusCode($response_code);

            } else {
                //Check if slot has ads assigned to it

                $adsModel = new AdsModel();

                if ($adsModel->slotAds($id)) {
                    $response_code = ResponseInterface::HTTP_BAD_REQUEST;

                    return Services::response()
                    ->setJSON(
                        [
                            'status' => 'FAIL',
                            'code' => $response_code,
                            'message' => "Slot has ads assigned to it. Delete or reassign the ads first.",
                        ]
                    )
                    ->setStatusCode($response_code);
                }

                // Delete Slot
                $model->delete($id);

                $response_code = ResponseInterface::HTTP_OK;

                return Services::response()
                ->setJSON(
                    [
                        'status' => 'SUCCESS',
                        'code' => $response_code,
                        'message' => "Slot Deleted Successfully.",
                    ]
                )
                ->setStatusCode($response_code);

            }
        } catch (Exception $e) {

            $response_code = ResponseInterface::HTTP_INTERNAL_SERVER_ERROR;

            return Services::response()
            ->setJSON(
                [
                    'status' => 'FAIL',
                    'code' => $response_code,
                    'message' => $e->getMessage(),
                ]
            )
            ->setStatusCode($response_code);
        }
    }


}
