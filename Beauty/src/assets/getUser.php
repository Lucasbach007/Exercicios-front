<?php
session_start();
include "conecta.php";

if (!isset($_SESSION['id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Não autorizado"]);
    exit;
}

$id_usuario = $_SESSION['id'];

$sql = "SELECT nome FROM pessoa WHERE id = ?";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("i", $id_usuario);
$stmt->execute();
$stmt->bind_result($nome_usuario);
$stmt->fetch();
$stmt->close();

echo json_encode(["nome" => $nome_usuario]);
?>
