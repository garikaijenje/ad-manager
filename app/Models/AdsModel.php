<?php

namespace App\Models;

use CodeIgniter\Model;
use App\Models\SlotsModel;

class AdsModel extends Model
{
    protected $DBGroup              = 'default';
    protected $table                = 'ads';
    protected $primaryKey           = 'id';
    protected $useAutoIncrement     = true;
    protected $insertID             = 0;
    protected $returnType           = 'array';
    protected $useSoftDeletes       = false;
    protected $protectFields        = true;
    protected $allowedFields        = [
        'slot_id', 'title', 'image', 'type',
        'ext', 'link', 'start', 'end', 
        'impressions', 'clicks'
    ];

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

    public function all()
    {

        $result = $this->asArray()
            ->select('ads.*,slots.name as slot_name')
            ->join('slots', 'slots.id = ads.slot_id')
            ->orderBy('ads.id', 'DESC')
            ->get()
            ->getResult();


        return $this->afterFind($result);

    }

    public function single($id)
    {

        $result = $this->asArray()
            ->select('ads.*,slots.name as slot_name')
            ->join('slots', 'slots.id = ads.slot_id')
            ->where(['ads.id' => $id])
            ->limit(1)
            ->get()
            ->getResult();

        return $this->afterFind($result);
    }

    public function slotAds($slot_id)
    {

        $result = $this->asArray()
            ->select('*')
            ->where(['slot_id' => $slot_id])
            // ->limit(1)
            ->orderBy('id', 'DESC')
            ->get()
            ->getResult();

        return $this->afterFind($result);
    }

    protected function afterFind(array $records): array
    {

        // Skip if $records is null
        if (!$records) return $records;

        $filteredData = [];

        foreach ($records as $record) {

            $record = (array)$record;

            // convert colums to int
            $record['id'] = (int)$record['id'];
            $record['slot_id'] = (int)$record['slot_id'];
            $record['impressions'] = (int)$record['impressions'];
            $record['clicks'] = (int)$record['clicks'];

            // remove dates
            // unset($record['created_at']);
            // unset($record['updated_at']);

            

            $start = strtotime($record['start']);
            $end = strtotime($record['end']);

            if (time() >= $start && time() < $end) {
                $record['status'] = 'Active';
            }elseif (time() < $start){
                $record['status'] = 'Pending';
            }elseif(time() > $end){
                $record['status'] = 'Expired';
            }

            $record['start'] = date("d M Y",$start);
            $record['end'] = date("d M Y",$end);

            $record['start_date'] = date("Y-m-d",$start);
            $record['end_date'] = date("Y-m-d",$end);

            array_push($filteredData, $record);
        }

        return $filteredData;
    }
}
