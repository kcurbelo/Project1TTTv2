
var app = angular.module('angularInputsApp', ["firebase"]); 


app.controller('angularInputsCtrl', ['$scope', '$firebase', function($scope, $firebase){
	// $scope.alert("sfdfsf")
//FireBase============================
 var ref = new Firebase("https://tic-tac-toe-curbelo.firebaseio.com/");
 //This does something different------https://t9wkt9fu0go.firebaseio-demo.com/
 var sync = $firebase(ref);
$scope.board = $firebase(ref).$asArray();

//FireBase============================


	$scope.board = [["", "", ""], ["", "", ""], ["", "", ""]];
	
	$scope.game = {board: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
		           p1: "X", 
		           p2: "O" };

	$scope.squareClick = function(row, col){
		$scope.board[row][col] = "I got clicked!!!";
	};

	$scope.turnNum = 0;

	function winConditions(piece){
		// console.log($scope.turnNum);
		for(var i = 0; i < 3; i++){
			if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][0] == $scope.board[i][2] && $scope.board[i][0] != ""){
				alert(piece + " wins in the row " + i);
			}
			else if($scope.board[0][i] == $scope.board[1][i] && $scope.board[0][i] == $scope.board[2][i] && $scope.board[0][i] != ""){
				alert(piece + " wins in the row " + i);
			}
			else if($scope.turnNum == 9){
				alert("tie game");
				$scope.turnNum = 0;
			}
		}
		if($scope.board[0][0] == $scope.board[1][1] && $scope.board[0][0] == $scope.board[2][2] && $scope.board[0][0] != ""){
				alert(piece + " wins in the row " + i);
			}
		else if($scope.board[0][2] == $scope.board[1][1] && $scope.board[0][2] == $scope.board[2][0] && $scope.board[0][2] != ""){
			alert(piece + " wins in the row " + i);
		}
	}

	// $scope.turnNum = 0;
	$scope.makeMove = function(row, col){
		if($scope.board[row][col] == ""){
			var piece = ($scope.turnNum % 2) == 0 ? "X" : "O";
			$scope.board[row][col] = piece;
			$scope.turnNum++;
			winConditions(piece);
		}
	};

	// $scope.squareClick = function(index){
	// 	$scope.board[Math.floor(index / 3)][index % 3] = "I got clicked!!!";
	// };

	console.log($scope);

}]);