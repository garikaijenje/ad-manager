<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\I18n\Time;
use App\Models\UsersModel;
use Faker;

class UsersSeeder extends Seeder
{
  public function run()
  {
    $faker = Faker\Factory::create();
    // $user = model('UserModel');
    $user = new UsersModel();

    $user->insert([
      'username' => "admin",
      'password' =>    password_hash('Happy50050', PASSWORD_DEFAULT),
      'email' => 'wazoo@yopmail.com',
      'created_at'  =>    Time::createFromTimestamp($faker->unixTime()),
      'updated_at'  =>    Time::now()
    ]);
  }
}
