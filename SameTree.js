var isSameTree = function(p, q) {
    if(p==undefined && q==undefined){
        return true
    }
    if(p==undefined || q==undefined){
         return false
    }

    if(p.val != q.val){
        return false
    }

    return isSameTree(p.left , q.left) && isSameTree( p.right , q.right)
       
    
}

console.log(isSameTree([1,2,3],[1,2,3]))