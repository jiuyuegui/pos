describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it('should print correct text', function () {

        spyOn(console, 'log');


        var dealItems = printInventory(inputs,/-/g); //函数闭包，返回一个匹配商品函数，barcode形式可变化
        //注意正则表达式传入时不用加引号，它是对象不是字符串
        var promotions = loadPromotions();
        var printInfo = dealItems(allItems,promotions); //返回打印商品信息数组，商品类型促销类型可变化

        printList(printInfo);                       //打印清单，打印方式可变化

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

          expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
