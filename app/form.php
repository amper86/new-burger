<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$housing = $_POST['housing'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$message = $_POST['message'];
$payment = $_POST['payment'];

$not_call = $_POST['not_call']; //1 или null
$not_call = isset($not_call) ? 'Нет' : 'Да';

$mail_message = '
<html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Комментарии к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $not_call . '</li>
            <li>Адрес : ' . $street . ' ' . $house . ' ' . $housing .' ' . $apartment . ' Этаж: ' . $floor . '</li>
        </ul>
    </body>
</html>    
';

$headers = "From: Администратор сайта <admin@burger.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$result = [status => 'true', text => ''];
if($name == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите имя!';
}
if($phone == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите телефон!';
}
if($street == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите улицу!';
}
if($result['status'] == 'true'){
    mail('86amper@gmail.com', 'Заказ', $mail_message, $headers);
    $result['text'] = 'Сообщение отправлено';
}

echo json_encode($result);

?>