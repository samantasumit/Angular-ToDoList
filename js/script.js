/* Script file for to do list application 
   created by Sumit Samanta
*/

var app = angular.module("listApp", []);

// contoller for to do list page
app.controller("listController", function($scope, $timeout)
{
    $scope.list = [{name: "Bread", time: new Date(), status: false}, {name: "Butter", time: new Date(), status: false}, {name: "Cheese", time: new Date(), status: false}, {name: "Eggs", time: new Date(), status: false}];

    // method that will be called when add new item form is submitted            
    $scope.add = function()
    {
        var item = {name: $scope.newitem, time: new Date(), status: false};
        var itemExits = false;
        var length = $scope.list.length;
        for(var i = 0; i < length; i++)
        {
            if($scope.list[i].name.toLowerCase().replace(/\s/g, '') == $scope.newitem.toLowerCase().replace(/\s/g, ''))
            {
                itemExits = true;
                break;
            }
        }
        if(!itemExits)
        {
            $scope.list.push(item);
        }
        else
        {
            $scope.errorMessage = true;
            $timeout(function()
            {
                $scope.errorMessage = false;
            }, 2000);          
        }
        $scope.newitem = "";
    }

    // method that will be called when remove item button is clicked
    $scope.remove = function(index)
    {    
        $scope.list.splice(index, 1);
    }

    // method that will be called when an item row is clicked to change its status
    $scope.done = function(index)
    {    
        var status = $scope.list[index].status;
        if(status == false)
        {
            $scope.list[index].status = true;
        }
        else
        {
            $scope.list[index].status = false;
        }
    }
});