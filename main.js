function printInventory(inputs){
  //先把inputs数组中重复的条码清除并统计出现次数，将其保存在哈希表中，其中key是条码，inputs[key]是其出现次数
  var inputsObj = {};                 //define a hashtable container
  var promotions = loadPromotions();
  var outputs;                        //定义输出对象数组

  for(var i = 0; i<inputs.length; i++){
    var key = inputs[i];
    if(!inputsObj[key]){
      inputsObj[key] = 1;             //第一次出现
    }else {
      inputsObj[key]++;               //重复出现
    }
  }

  //遍历这个hashtable,依次与items对比
  var promot = false;
  var word;
  for(var key in inputsObj){
    for(var j = 0; j<allItems[i].length; j++){
      if(key == allItems[i].barcode)
        {
          for(var k = 0; k<outputs[0].barcodes.length; k++){
            if((key == outputs[0].barcodes[k]) && (inputsObj[key] >=2))
              { promot = true; }
        }
        outputs.push({name:allItems[i].name,num:inputsObj[key],allItems[i].unit,
                      price:allItems[i].price,favorable:promot});
        break;
      }
    }
  }
  word = '***********<没钱赚商店>购物清单**********\n' +
  '名称：'+雪碧+'，数量：'+5+瓶+'，单价：'+3.00+'(元)，小计：'+12.00+'(元)\n'+  //将用循环输出
  '-----------------------------------\n' +
  '挥泪赠送商品：\n' +
  '名称：'+雪碧+'，数量：1'+瓶+'\n'+                                        //将用循环输出
  '-----------------------------------\n' +
  '总计：'+51.00+'(元)\n' +
  '节省：'+7.50+'(元)\n' +
  '***********************************';
  console.log(word);

}
