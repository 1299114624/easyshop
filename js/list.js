var shopList=(function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.event();
            this.getData();
        },
        event(){
            var _this = this;
            this.$ele.onclick=function(ev){
                ev=ev||window.event;
                var target=ev.target||ev.srcElement;
                if(target.nodeName=='BUTTON'){
                    var id = target.getAttribute('attr-id');
                    var count = target.parentNode.querySelector('input').value;
                   _this.addCar(id,count);
                }
            }
        },
        getData(){
            var _this = this;
            var params = {
                url:'JSON/shop.json',
                success:function(data){
                    _this.insertData(data);
                }
            }
            sendAjax(params);
        },
        insertData(data){
            var data = data.data;
            var arr = [];
            for(var i = 0;i < data.length; i++){
                arr.push(`<div class="shop-box">
                            <ul class="shop-list">
                                <li>商品名称: <span>${data[i].name}</span></li>
                                <li>商品价格: <span>${data[i].price}</span></li>
                                <li>商品颜色: <span>${data[i].color}</span></li>
                                <li>商品备注: <span>${data[i].ps}</span></li>
                            </ul>
                            <input type="number">
                            <button attr-id=${data[i].id}>加入购物车</button>
                        </div>`)
            }
            this.$ele.innerHTML = arr.join('');
        },
        addCar(id,count){
            var shopList=localStorage.shopList || '[]';
            shopList= JSON.parse(shopList);
            console.log(shopList,count)
            for(var i = 0;i<shopList.length;i++){
                if(shopList[i].id==id){
                    console.log(shopList[i].count,count)
                    shopList[i].count=Number(shopList[i].count)+Number(count);
                    break;
                }
            }
            if(i == shopList.length){
                shopList.push({id:id,count:count});
            }
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
}())