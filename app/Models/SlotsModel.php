<?php

namespace App\Models;

use CodeIgniter\Model;
use App\Models\AdsModel;

class SlotsModel extends Model
{
    protected $DBGroup              = 'default';
    protected $table                = 'slots';
    protected $primaryKey           = 'id';
    protected $useAutoIncrement     = true;
    protected $insertID             = 0;
    protected $returnType           = 'array';
    protected $useSoftDeletes       = false;
    protected $protectFields        = true;
    protected $allowedFields        = ['name'];

    // Dates
    protected $useTimestamps        = true;
    protected $dateFormat           = 'datetime';
    protected $createdField         = 'created_at';
    protected $updatedField         = 'updated_at';
    protected $deletedField         = false;

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks       = true;
    protected $beforeInsert         = [];
    protected $afterInsert          = [];
    protected $beforeUpdate         = [];
    protected $afterUpdate          = [];
    protected $beforeFind           = [];
    protected $afterFind            = ['afterFind'];
    protected $beforeDelete         = [];
    protected $afterDelete          = [];

    protected function afterFind(array $data) : array
    {

        $records = $data['data'];

        // Skip if $data['data'] is null
        if(!$records) return $data;


        /** 
         * Format result if it's a single array
         * Use count() twice; one time in default mode and one time in recursive mode. 
         * If the values match, the array is not multidimensional, as a multidimensional array would have a higher recursive count.
         **/ 

        if(count($records) == count($records, COUNT_RECURSIVE)){
            $array = [];
            array_push($array,$records);
            $records = $array;
            // exit(var_dump($records));
        }

        $adsModel = new AdsModel();

        $filteredData = [];

        foreach($records as $record){
            // convert id to int
            $record['id'] = (int)$record['id'];
            // $record['ads'] = $this->filteredAds($adsModel->where('slot_id', $record['id'])->findAll());
            $record['ads'] = $this->filteredAds($adsModel->slotAds($record['id']));
            // $record['ads'] = $adsModel->where('slot_id', $record['id'])->findAll();

            // remove dates
            // unset($record['created_at']);
            // unset($record['updated_at']);

            $impressions = 0;
            $clicks = 0;

            $ads = $adsModel->slotAds($record['id']);
            foreach ($ads as $ad){
                $impressions += $ad['impressions'];
                $clicks += $ad['clicks'];
            }

            $record['total_ads'] = count($ads);
            $record['total_impressions'] = $impressions;
            $record['total_clicks'] = $clicks;

            // exit(var_dump($ads));


            array_push($filteredData,$record);
        }



        $data['data'] = $filteredData;
        return $data;

    }

    public function filteredAds (array $ads) : array {
        
        $result = [];

        foreach($ads as $ad){

            // convert columns to int
            $ad['id'] = (int)$ad['id'];
            $ad['impressions'] = (int)$ad['impressions'];
            $ad['clicks'] = (int)$ad['clicks'];

            // remove columns
            unset($ad['slot_id']);
            // unset($ad['updated_at']);

            array_push($result, $ad);
        }
        return $result;
    }

}
