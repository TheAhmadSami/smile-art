<?php

$newsPath = $_POST['news-path'];
$path = "../../news/$newsPath/";
$files = array_diff(scandir($path), array('.', '..'));
$data = "<div class='ni-images swiper-container'><div class='swiper-wrapper'>";

foreach ($files as $value) {
  $data .= "<div class='ni-tile swiper-slide' style='background-image: url(".$path.$value.")'></div>";
}
$data .= "</div></div>";
echo $data;

?>