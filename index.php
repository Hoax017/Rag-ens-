<?php
	$file = 'message.json';
	if (isset($_GET["datas"])) {
		if (is_file($file)) {
			$data = json_decode(file_get_contents($file));
			if (!$data) {
				$data = [];
			}
		} else {
			$data = [];
		}

		var_dump($_GET);
		var_dump($data);

		$data = array_merge($data, json_decode($_GET["datas"]));
		var_dump($data);

		file_put_contents($file, json_encode($data));
	} elseif (isset($_GET["cleardata"])) {
		unlink($file);
	}
?>
<script type="text/javascript">close();</script>