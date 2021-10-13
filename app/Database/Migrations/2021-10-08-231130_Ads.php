<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Ads extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
                'null' => false
            ],
            'slot_id' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => false
            ],
            'title' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => false
            ],
            'image' => [
                'type' => 'LONGTEXT',
                'null' => false
            ],
            'type' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => false
            ],
            'ext' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => false
            ],
            'link' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'start' => [
                'type' => 'DATETIME',
                'null' => false,
            ],
            'end' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'impressions' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => false,
                'default' => 0
            ],
            'clicks' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => false,
                'default' => 0
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => false,
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => false,
            ]
        ]);

        $this->forge->addKey('id', true);
        $this->forge->createTable('ads');
    }

    public function down()
    {
        $this->forge->dropTable('ads');
    }
}
