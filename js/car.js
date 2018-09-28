var shopCar=(function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.event();
            this.getShopList();
        },
        event(){
            var _this = this;
            this.$ele.onclick=function(ev){
                ev=ev||window.event;
                var target=ev.target||ev.srcElement;
                if(target.nodeName=='BUTTON'){
                    var $tr=target.parentNode.parentNode;
                    _this.$ele.removeChild($tr);
                }
            }
        },
        getShopList(){
            var _this = this;
            var params = {
                url:'JSON/shop.json',
                success:function(data){
                    _this.shopList=data.data;
                    _this.getData();
                }
            }
            sendAjax(params);
        },
        getData(){
            this.carData=JSON.parse(localStorage.shopList || '[]');
            this.insertData(this.carData);
        },
        insertData(data){
            var arr = [];
            // [{id: 1, count: 2}]
            for(var i = 0;i < data.length; i++){
                var shop;
                for(var j=0;j<this.shopList.length;j++){
                    if(data[i].id==this.shopList[j].id){
                        shop = this.shopList[j];
                        break;
                    }
                }
                arr.push(`  <tr class='shop-content'>
                        <td>${shop.name}</td>
                        <td>${shop.price}元</td>
                        <td><input type="text" value=${data[i].count}>个</td>
                        <td>${data[i].count*shop.price}</td>
                        <td><button>删除</button></td>
                    </tr>`)
            }
            this.$ele.innerHTML = arr.join('');
        }
        
    }
}())