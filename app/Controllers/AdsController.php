<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\API\ResponseTrait;

use App\Models\AdsModel;

use Config\Services;
use Exception;

class AdsController extends ResourceController
{

    use ResponseTrait;

    public function getAds()
    {
        $model = new AdsModel();

        try {
            $ads = $model->all();

            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
                ->setJSON([
                    'status' => 'SUCCESS',
                    'code' => $response_code,
                    'data' => $ads
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

    public function getAd($id)
    {
        $model = new AdsModel();

        try {

            $ad = $model->single($id);

            if (!$ad) {

                $response_code = ResponseInterface::HTTP_NOT_FOUND;

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'FAIL',
                            'code' => $response_code,
                            'message' => "Ad Not Found.",
                        ]
                    )
                    ->setStatusCode($response_code);
            } else {

                $response_code = ResponseInterface::HTTP_OK;

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'SUCCESS',
                            'code' => $response_code,
                            'data' => $ad,
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

    public function addAd()
    {
        $request = Services::request();
        helper('custom_helper');

        $rules = [
            "slot_id" => [
                "label" => "Slot ID",
                "rules" => "trim|numeric|required"
            ],
            "title" => [
                "label" => "Title",
                "rules" => "trim|required|max_length[50]|is_unique[ads.title]"
            ],
            "image" => [
                "label" => "Image",
                "rules" => "uploaded[image]|is_image[image]|mime_in[image,image/jpg,image/jpeg,image/gif,image/png]|max_size[image,20480]",
                'errors' => [
                    'uploaded' => 'Image file is required.',
                ]
            ],
            "link" => [
                "label" => "Link",
                "rules" => "if_exist|permit_empty|valid_url"
            ],
            "start" => [
                "label" => "Start Date",
                "rules" => "trim|required|valid_date[Y/m/d]"
            ],
            "end" => [
                "label" => "Stop Date",
                "rules" => "trim|required|valid_date[Y/m/d]"
            ]
            
        ];

        // Validate image incase it's null
        if(empty($this->request->getFile('image'))){
            $response_code = ResponseInterface::HTTP_BAD_REQUEST;

            return Services::response()
            ->setJSON(
                [
                    'status' => 'FAIL',
                    'code' => $response_code,
                    'errors' => validationErrors(['image' => "Invalid file uploaded."])
                ]
            )
            ->setStatusCode($response_code);
        }

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

        $adsModel = new AdsModel();

        $slot_id = $request->getVar('slot_id');
        $title = $request->getVar('title');
        $link = $request->getVar('link');
        $start = $request->getVar('start');
        $end = $request->getVar('end');

        // Image
        $imgPath = $this->request->getFile('image');
        $image = base64_encode(file_get_contents($imgPath));
        $type = $imgPath->getClientMimeType();
        $ext = $imgPath->guessExtension();

        $formData = [
            'slot_id' => esc($slot_id),
            'title' => esc($title),
            'image' => esc($image),
            'type' => esc($type),
            'ext' => esc($ext),
            'link' => esc($link),
            'start' => esc(stringtodatetime($start)),
            'end' => esc(stringtodatetime($end))
        ];

        try {

            $adsModel->save($formData);

            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
                ->setJSON([
                    'status' => 'SUCCESS',
                    'code' => $response_code,
                    'message' => 'Ad Successfully Added.'
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

    public function updateAd($id)
    {
        $request = Services::request();
        helper('custom_helper');

        $rules = [
            "slot_id" => [
                "label" => "Slot ID",
                "rules" => "trim|numeric|required"
            ],
            "title" => [
                "label" => "Title",
                "rules" => "trim|required|max_length[50]"
            ],
            
            "link" => [
                "label" => "Link",
                "rules" => "if_exist|permit_empty|valid_url"
            ],
            "start" => [
                "label" => "Start Date",
                "rules" => "trim|required|valid_date[Y/m/d]"
            ],
            "end" => [
                "label" => "Stop Date",
                "rules" => "trim|required|valid_date[Y/m/d]"
            ]

        ];

        // Validate image incase it's null
        $hasImage = isset($_FILES['image']) && !empty($_FILES['image']) && !empty($_FILES['image']['size']);

        // return var_dump($hasImage);

        if ($hasImage) {

            $rules["image"] = [
                "label" => "Image",
                "rules" => "uploaded[image]|is_image[image]|mime_in[image,image/jpg,image/jpeg,image/gif,image/png]|max_size[image,20480]",
                'errors' => [
                    'uploaded' => 'Image file is required.',
                ]
            ];

        }

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

        $adsModel = new AdsModel();

        $slot_id = $request->getVar('slot_id');
        $title = $request->getVar('title');
        $link = $request->getVar('link');
        $start = $request->getVar('start');
        $end = $request->getVar('end');

        $formData = [
            'id' => $id,
            'slot_id' => esc($slot_id),
            'title' => esc($title),
            'link' => esc($link),
            'start' => esc(stringtodatetime($start)),
            'end' => esc(stringtodatetime($end))
        ];

        if($hasImage){

            $imgPath = $this->request->getFile('image');
            $image = base64_encode(file_get_contents($imgPath));
            $type = $imgPath->getClientMimeType();
            $ext = $imgPath->guessExtension();

            $formData['image'] = esc($image);
            $formData['type'] = esc($type);
            $formData['ext'] = esc($ext);

        }

        try {

            $adsModel->save($formData);

            $response_code = ResponseInterface::HTTP_OK;

            return Services::response()
                ->setJSON([
                    'status' => 'SUCCESS',
                    'code' => $response_code,
                    'message' => 'Ad Successfully Updated.'
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

    public function deleteAd($id)
    {
        $model = new AdsModel();

        try {

            $ad = $model->find($id);

            if (!$ad) {

                $response_code = ResponseInterface::HTTP_NOT_FOUND;

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'FAIL',
                            'code' => $response_code,
                            'message' => "Ad Not Found.",
                        ]
                    )
                    ->setStatusCode($response_code);
            } else {

                // Delete Ad
                $model->delete($id);

                $response_code = ResponseInterface::HTTP_OK;

                return Services::response()
                    ->setJSON(
                        [
                            'status' => 'SUCCESS',
                            'code' => $response_code,
                            'message' => "Ad Deleted Successfully.",
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

    public function loadAds($id){

        $model = new AdsModel();

        $slot_ads = $model->slotAds($id);
        

        $ads_to_display = [];

        if($slot_ads){

            foreach ($slot_ads as $ad) {
                $start = $ad['start'];
                $end = $ad['end'];
                $end_date = strtotime($end);

                if ($end_date > time()) {

                    array_push(
                        $ads_to_display,
                        [
                            'id' => $ad['id'],
                            'title' => $ad['title'],
                            'image' => $ad['image'],
                            'type' => $ad['type'],
                            'ext' => $ad['ext'],
                            'link' => $ad['link'],
                            'impressions' => $ad['impressions'],
                            'clicks' => $ad['clicks'],
                        ]
                    );
                }

            }

        }

        if (count($ads_to_display) > 0) :

            // RANDOMIZE

            shuffle($ads_to_display);
            $rand_ad = $ads_to_display[0];

            $ad_id = (int)$rand_ad['id'];
            $ad_image = "data:{$rand_ad['type']};base64, ".$rand_ad['image'];
            $ad_link = empty($rand_ad['link']) ? null : base_url()."/load-ads/click/{$ad_id}";

            // UPDATE IMPRESSION STATS
            $model->save([
                'id' => $ad_id,
                'impressions' => (int)$rand_ad['impressions'] + 1
            ]);

            return $ad_link ? "
            <div style='position:relative;'>
            <a href='{$ad_link}'><img style='max-width: 100%' src='{$ad_image}'></a>
            </div>
            " : "
            <div style='position:relative;'>
           <img style='max-width: 100%' src='{$ad_image}'>
            </div>
            ";

        endif;

    }

    public function handleClick($id){

        $model = new AdsModel();
        helper('custom_helper');

        $ad = $model->single($id)[0];

        // UPDATE IMPRESSION STATS
        $model->save([
            'id' => $id,
            'clicks' => (int)$ad['clicks'] + 1
        ]);

        failSafeRedirect($ad['link']);

    }
}
