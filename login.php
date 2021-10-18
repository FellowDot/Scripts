$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
$stmt->execute(array(
    ':username' => $user,
    ':password' => $pass
));

$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$affected_rows = $stmt->rowCount();

if ($affected_rows == 1) {
    //add the user to our session variables
    $_SESSION['username'] = $username;
    echo ('Correct');
} else {
    echo 'Incorrect username/password';
}