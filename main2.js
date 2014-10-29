function printInventory(inputs){
  //先把inputs数组中重复的条码清除并统计出现次数，将其保存在哈希表中，其中key是条码，inputs[key]是其出现次数
  var inputsObj = {};                   //define a hashtable container
  var promotions = loadPromotions();
  var allItems = loadAllItems();
  var outputs = [];
  var n;                                //定义输出对象数组

  for(var i = 0; i<inputs.length; i++){
    n = 1;
    if(inputs[i].length !== 10){
      n = parseInt(inputs[i].substr(11,(inputs[i].length-11)));
      inputs[i] = inputs[i].substr(0,10);
    }
    var key = inputs[i];
    if(!inputsObj[key])
      {
        inputsObj[key] = 0;
      }
    inputsObj[key] += n;
      }

  //遍历这个hashtable,依次与items对比
  for(var code in inputsObj){
    for(var j = 0; j<allItems.length; j++){
      if(code == allItems[j].barcode)
        {
          for(var k = 0; k<promotions[0].barcodes.length; k++){
            var promot = false;
            if((code == promotions[0].barcodes[k]) && (inputsObj[code] >=2))
              {
                promot = true;
                break;
              }
            }
          var t = outputs.push({name:allItems[j].name,num:inputsObj[code],unit:allItems[j].unit,price:allItems[j].price,favorable:promot});
          break;
      }
    }
  }

  //输出清单
  var s1 = '***<没钱赚商店>购物清单***\n',s3 = '----------------------\n挥泪赠送商品：\n',s2 = s4 = "";

  var subt = total = save = 0.00;
  for(var m = 0; m<t; m++){
    subt = outputs[m].num*outputs[m].price;
    if(outputs[m].favorable)
      {
        subt -= outputs[m].price;
        s3 += '名称：'+outputs[m].name+'，数量：1'+outputs[m].unit+'\n';
        save += outputs[m].price;
      }
    s2 += '名称：'+outputs[m].name+'，数量：'+outputs[m].num+outputs[m].unit+'，单价：'+
    (outputs[m].price).toFixed(2)+'(元)，小计：'+subt.toFixed(2)+'(元)\n';
    total += subt;
  }

  s4 = '----------------------\n'+'总计：'+total.toFixed(2)+'(元)\n' +
  '节省：'+save.toFixed(2)+'(元)\n'+'**********************';

  console.log(s1+s2+s3+s4);

}
