# JavaScript 笔记

## 1.变量

### 1.1注释

1. 单行注释   ctrl+/
   
```js
//这是一个输入框
prompt('请输入您的年龄');

//alert 弹出警示框 输出的 展示给用户的
alert('计算结果是');

//console 控制台输出 给程序员测试用的（网页右键“检查-控制台”或者“f12键-控制台”）
console.log('我是程序员能看到的');


//用户输入名字，存储到一个name的变量里
var name = prompt('请输入您的姓名');
//输出这个用户名
alert(name);

```

2. 多行注释 /* */ shift + alt + a
   
### 1.2声明变量
```js
/* 1.声明一个叫age的变量 
 * 2.赋值，把值存入这个变量中
 * 3.输出结果
 * 4.变量的初始化 声明变量并赋值 
*/
var age = 18;
console.log(age);

var name = 'zhang'
console.log(name);     

//声明多个变量
var name = '旗木卡卡西';
var address = '火影村';
var age = 30;
var email = 'kkk@itcast.cn';
var gz = 200;
console.log(name);
console.log(address);
console.log(age);
console.log(email);
console.log(gz);

//更新变量 变量值以最后一次赋的值为准
var name = 'hha';
console.log(name);
name = '某某';
console.log(name);
```

## 2.运算符
```js
1. 取余（取模）%

console.log(5 % 2);// 1
console.log(3 % 5);// 3

2. 浮点数,算数运算里面会有精准度问题,不能直接拿浮点数相比较是否相等

console.log(0.1 + 0.2);//0.30000000000000004

var num = 0.1 + 0.2;
console.log(num == 0.3);//false
```

### 2.1递增(++)，递减(--)

>反复给数字变量添加或减去1，可使用递增（++）和递减(--)，递增、递减运算符必须和变量配合使用; 
前置递增和后置递增如果单独使用，效果是一样的

1. 前置递增运算符
 >++ 写在变量的前面,先加1,后返回值

```js
var age = 10;
++age; //类似于age= age+1
console.log(age);

var p = 10;
console.log(++p + 10);
```

2. 后置递增
>++ 写在变量的后面,先表达式返回原值，后自加1  

```js
    var age = 10;
    console.log(age++ + 10);//20,age++是10，然后再加10
    console.log(age);//11

    var a = 10;
    a++;// a++ = 11, a=11
    var d = a++ + 2;// a++ =11 a=12
    console.log(d);// 13

    var e = 10;
    var f = e++ + ++e;//1.e++ =10 ,e=11  2.e=12,++e=12
    console.log(f);// 22
```


  程序里的等于符号是 == 默认转换数据类型，会把字符串型的数据转换为数字型，只要求值相等就可以;程序里有全等===，一模一样，要求两侧的值还有数据类型完全一致才可以true

```js

    console.log('3 >= 5');//false
    console.log(2 <= 4);//true
  
    console.log(3 == 5);//false
    console.log(18 == 18);//true
    console.log(18 == '18');//true
    console.log(18 != 18);//false

    console.log(18 === 18);//true
    console.log(18 === '18');//false
```

### 2.2逻辑运算符

1. 逻辑与&&  (两侧都为true，结果才是true。有一侧为false,结果就false)
2. 逻辑或|| (两边都为false才返回false。有一侧true，结果就true)
3. 逻辑非！(取反符，用来取一个布尔值相反的值)
```js
console.log(3 > 5 && 3 > 2);//false
console.log(3 < 5 && 3 > 2);//true

console.log(3 > 5 || 3 > 2);//true
  
console.log(!true);//false
```

* 短路运算（逻辑中断）
    >表达式1 && 表达式2，如果表达式1结果为真，就返回表达式2；表达式1为假，返回表达式1;
    >如果有空的或者否定的为假(如0，‘’, null, undefined, NaN),其余是真的

```js
    console.log(123 && 456);//456

    console.log(0 && 465);//0
```

* 逻辑或短路运算 
  >如果表达式1结果为真，就返回表达式1;表达式1为假，返回表达式2

```js
console.log(123 || 456);// 123
    console.log(0 || 456);// 456
    console.log(0 || 456 || 789);// 456

    var num = 0
    console.log(123 || num++);// 123
    console.log(num);// 0
 ```

* 赋值运算符 =、+=、-=、*=、/=、%=
```js
    var age = 10
    age += 5;//相当于age= age + 5
    age *= 10;//相当于age= age * 10
```
* 运算符优先级
    1. 小括号 （ ）
    2. 一元运算符 ++ -- ！
    3. 算数运算符 先* / 后+ -
    4. 关系运算符 > >= < <=
    5. 相等运算符 == != === !==
    6. 逻辑运算符 先&& 后||
    7. 赋值运算符 =
    8. 逗号运算符 ，
    * 一元运算符里的逻辑非优先级很高，逻辑与比逻辑或优先级高


## 3.字符串
* 检测获取字符串长度 length

```js
    var str ='my name is aaa';
    console.log(str.length);
```
* 字符串的拼接+ (只要有字符串与其他类型相拼接 结果就是字符串类型)
```js
    console.log('老师'+'朋友');
    console.log('老师'+1800);
```

1. 数字型转换为字符串 
   * 变量.toString（）,利用String(变量)
```js
   var num =18;
    var str =num.toString();
    console.log(str);
    console.log(typeof str);

    console.log(String(num));
```

   * 利用+拼接字符串 常用这个 //console那里黑色的数字是字符型
```js
 console.log(num+'');
```

2. 字符型转换为数字型 //console那里蓝色的数字是数字型 
   * parseInt(变量) 可把字符型转换为数字型,得到的是没有四舍五入的整数 
   * parseFloat(变量)  字符型转换为数字型,得到小数、浮点数
   * 数算运算 - * / 隐式转换  
```js
var age=prompt('输入您的年龄');
console.log(parseInt(age));
console.log(Number(age)); 

console.log(parseFloat('3.14'));

console.log('123'-2);
```

计算年龄的案例：在页面上弹出输入框，输入出生年份后，能计算出年龄
```js
/*弹出一个输入框（prompt),让用户输入
 *把用户输入的值用变量保存起来，然后用今年的年份减去变量值，结果就是现在的年龄（程序内部处理）
 *弹出警示框（alert),把计算结果输出（输出结果） 
*/

var year = prompt('请输入您的出生年份');
var age = 2022 - year; // year取过来是字符串型,这里用的是减法,有隐式转换
alert ('您今年已经'+age+'岁了');
```    

简单相加案例
```js
//先弹出第一个输入框,保存起来；再弹出第二个,保存。两值相加,赋值给新的变量（注意数据类型转换),弹出警示框，输出结果

var num1 = prompt('输入第一个值');
var num2 = prompt('输入第二个值');
var result = parseFloat(num1) + parseInt(num2);
alert('您的结果是:' + result);
```

3. 转换为布尔型Boolean( )  
   >代表空、否定的值（如‘’，0，NaN,null,undefined）会被转换成false，其余值会被转换成true
```js
console.log(Boolean('小米'));//true
console.log(Boolean(''));//false
```

## 4.流程

* 判断某年是否为闰年
  * 算法：能被4整除且不能整除100的为闰年，或者能够被400整除的就是闰年。
  * 弹出prompt输入框，把值取过来保存到变量；
  * 使用if语句判断是否闰年;
  * 注意里面的且&& 还有或者||的写法，注意判断整除的方法是取余为0.

```js
        var year=prompt('请输入年份');
        if (year % 4 ==0 && year % 100 != 0 || year % 400 == 0){
            alert('您输入的年份是闰年')
        }else{
            alert ('您输入的年份是平年')
        }；


//判断是否中奖
        var name = prompt('请输入您的姓名：');
        if(name == '刘德华'){
            alert('恭喜,您中奖5元')
        } else {alert ('抱歉，您未中奖')
        };
```


### 4.1三元表达式
有三元运算符组成的式子称为三元表达式

语法结构：条件表达式？ 表达式1： 表达式2

执行思路：如果条件表达式结果为真，则返回 表达式1的值，如果条件表达式结果为假，则返回表达式2的值
```js
var num =10; 
var result = num > 5 ? '是的': '不是';
console.log (result);      
```

* 案例: 数字补0

```js
// 输入数字，数字小于10则在前面补0，如09，08，数字大于10，不用补。

// 用户输入0~59之间的一个数字；如果数字小于10，则在这个数字前面补0，否则不做操作；

// 用一个变量接受这个返回值，输出

var time = prompt('请输入一个 0~59 之间的数字');
var result = time < 10 ? '0' + time : time;
alert (result);
```

### 4.2 switch语句
switch语句也是多分支语句，也可以实现多选一。

语法结构
```js
switch (表达式) {
    case value1：
        执行语句1；
        break;

    case value2:
        执行语句2；
        break;
            ...
    default:
        执行最后的语句；
}

// 执行思路:利用表达式的值和case 后面的选项值相匹配，如果匹配上，就执行该case里面的语句；如果都没有匹配上，那就执行default里面的语句。


switch (2) {
    case 1:
        console.log('这是1');
        break;
    case 2:
        console.log('这是2');
         break;
    case 3:
        console.log('这是3');
        break;
    default:
        console.log('没有匹配结果');
}

// switch 注意事项：
// 1.在开发里，表达式经常写成变量；
// 2.表达式的值和case里的值相匹配的时候是全等（必须是值和数据类型一致才可以）；
// 3.break，如果当前的case里面没有break，则不会退出switch，而会继续执行下一个case。
```
```js
// 弹出prompt输入框，把值取过来保存到变量中；
// 将这个变量作为switch括号里的表达式；
// case后面的值写几个不同的水果名字，注意要加引号，因为必须是全等匹配；
// 弹出不同价格即可。注意每个case后加上break，以便退出switch语句。

var fruit = prompt('输入查询的水果：');
switch (fruit) {
    case '苹果':
        alert('苹果价格3.54/斤');
        break;
    case '雪梨':
        alert('雪梨价格4.88/斤');
        break;
    default:
        alert('没有此水果');
} 
```

* switch和if else if 区别：

  * 1.一般情况下，两者可以相互替换；

  * 2.switch...case 语句通常处理case为比较确定值的情况，而if else语句更加灵活，常用于范围判断（大于、等于某个范围）

  * 3.switch语句进行条件判断后直接执行的程序的条件语句，效率更高。而if...else语句有几种条件，就得判断多少次。

  * 4.当分支比较少时，if...else语句的执行效率比switch语句更高。

  * 5.当分支比较多时，switch语句的执行效率比较高，而且机构更清晰。

### 4.3 if
* if的语法结构:
```js
if(条件表达式) { 
    //  执行语句
}

// 执行思路：如果if里面的条件表达式为true，执行大括号里面的执行语句；否则执行if语句后面的代码

if (3 < 5) {
    alert('杀马特');
}
```

```js
if(条件表达式){
     执行语句1
} else { 执行语句2 
}

// 执行思路：如果if里面的条件表达式为true，执行语句1；否则执行语句2

var age = prompt('请输入您的年龄');
if (age >= 18) {
    alert('一起杀马特造型');
} else {
    alert('回家睡觉');
}
```

* if else if 多分支语句,就是利用多个条件来选择不同的语句执行，得到不同的结果,多选1的过程。

语法规范:
```js
        if(条件表达式1){
            语句1;
        } else if(条件表达式2){
            语句2;
        } else if (条件表达式3){
            语句3;
        } else { 
            最后的语句;
        }

// 执行思路：如果条件表达式1满足就执行语句1，执行完毕后，退出整个if分支语句。
// 条件表达式1不满足，则判断条件表达式2，满足的话，执行语句2，以此类推。
// 如果上面的所有条件都不成立，则执行else里面的语句。
// 注意点：else if里面的条件理论上是可以任意多个的；else if中间有个空格 
        
var score = prompt('请输入你的分数');
if (score >= 90) {
    alert('你是我的骄傲');
} else if (score >= 80) {
    alert('你好棒了');
} else if (score >= 70) {
    alert('你要加油');
} else if (score >= 60) {
    alert('要继续加油');
} else {
    alert('你去学习吧');
}
```

## 5.循环
循环的目的：可以重复执行某些代码
### 5.1 for循环
1. for重复执行某些代码，通常跟计数有关系
2. for语法结构:
```js
for(初始化变量; 条件表达式; 操作表达式) {
    //循环体
}
```
3. 初始化变量：就是用var声明的一个普通变量，通常用于作为计数器使用。

4. 条件表达式：就是用来决定每一次循环是否继续执行（就是终止的条件）

5. 操作表达式：是每次循环最后执行的代码，经常用于我们计数器变量进行更新（递增或者递减）

* 代码体验 重复打印100句，您好
```js
for (var i = 1; i <= 100; i++) {
    console.log('您好');
}
```
* 执行思路：
  * 首先执行里面的计数器变量 var i=1，但是这句话在for里只执行一次；
  * 去i<=100 来判断是否满足条件，如满足条件，就去执行循环体，不满足条件就退出循环;
  * 最后执行 i++， i++是单独写的代码，递增， 第一轮结束;
  * 接着去执行 i<=100,如果满足条件就去执行循环体，不满足条件退出循环  第二轮。

* 断点调试：
  * 指自己在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后你可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码显示行即显示错误，停下。
        
* 断点调试可以帮助我们观察程序的运行过程：
  * 浏览器中按f12-->source-->找到需要调试的文件-->在程序的某一行设置断点
  
  * Watch:监视，通过watch可以监视变量的值的变化，非常的常用。
  
  * F11:程序单步执行，让程序一行一行的执行，这个时候，观察watch中变量的值的变化。
  
1. for循环可以重复执行相同的代码，可以让用户控制输出的次数
```js
var num = prompt('请您输入次数');
for (var i = 0; i < num; i++) {
       console.log('上号了');
}
```
2. for循环可以重复执行不同的代码，因为有计数器变量i的存在，i每次循环值都会变化。
```js
        for (var i = 0; i < 100; i++) {
            console.log('这个人今年' + i + '岁了');
        }
        for (var i = 0; i <= 100; i++) {
            if (i == 1) {
                console.log('这个人今年1岁了,他出生了');
            } else if (i == 100) {
                console.log('这个人今年100岁了,他死了');
            } else {
                console.log('这个人今年' + i + '岁了');
            }
        }
```

```js
// for 循环重复执行某些操作，比如说做了100次加法运算
// 求1~100之间的整数累加和
// 需要循环100次，需要一个计数器i,需要一个存储结果的变量sum，但是初始值一定是0
// 核心算法：1+2+3+4+...,sum = sum + i
        
        var sum = 0;
        for (var i = 0; i <= 100; i++) {
            sum += i;   //sum = sum + i;
        }
        console.log(sum);
```


for循环案例
* 1.求1~100之间所有数的平均值 （需要一个sum 和的变量，还需要一个平均值 average 变量）

```js
var sum = 0;
let average = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
};
average = sum / 100;
console.log(average)
```

* 2.求1~100之间所有偶数和奇数的和  (需要一个偶数的变量even，一个奇数的变量odd)
 ```js
 var even = 0;
 var odd = 0;
 for(var i = 1; i <= 100; i++ ) {
    if (i % 2 === 0){
        even += i;
    } else{
        odd += i;
    }
 }
 console.log(even);
 console.log(odd);
 ```

* 3.求1~100之间所有能被3整除的数字之和
```js
var result = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 ==0){
        result += i;
    }
}   
console.log(result);
```

* 4.求班级总成绩、平均成绩
```js
var num = prompt ('输入班级人数：')；
var average = 0;
var sum = 0;
for(var i = 1; i <= num; i++){
    var score = prompt('输入第'+ i +'个学生成绩');
    sum =sum + parseFloat (score) ;//因为从prompt取过来的数据是字符串型的需要转换为数字型
}
average = sum / num;
alert ('班级总成绩是：'+ sum );
alert ('班级平均成绩是：'+ average);
```

* 5.一行打印5个星星（采取追加字符串的方式，这样可以打印到控制台上）
```js
var str ='';
for (var i = 1; i <= 5; i++) {
    str =str + '⭐';
}
console.log(str);

var num = prompt('输入星星个数');
var str = '';
for (var i = 1; i <= num; i++){
    str =str + '⭐'
}
console.log(str);
```
### 5.2 双重for循环
语法结构：
```js
        for (外层的初始化变量；外层的条件表达式；外层的操作表达式) {
            for (里层的初始化变量；里层的条件表达式；里层的操作表达式) {
                //执行语句；
            }
        }

        // 里面的循环看作是外层循环的语句
        // 外层循环循环一次，里面的循环执行全部
        
         for (var i = 1; i <= 3; i++) {
            console.log('这是外层循环的第' + i + '次')
            for (var j = 1; j <= 3; j++) {
                console.log('这是里层循环的第' + j + '次');
            }
        }
```

*  1.打印五行五列星星（内层循环负责一行打印5个星星，外层循环负责打印5行）
```js
        var str = '';
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 5; j++) {
                str = str + '⭐';
            }
            str += '\n'; //如果一行打印完毕5个星星就要另起一行 加\n
        }
        console.log(str);


        var str = '';
        var rows = prompt('输入行数')；
        var cols = prompt('输入列数');
        for (var i = 1; i <= rows; i++) {
            for (var j = 1; j <= cols; j++) {
                str = str + '⭐';
            }
            str += '\n';
        }
        console.log(str);
```

* 2.打印倒三角形
```js
var str = '';
for (var i = 1; i <= 10; i++) {
    for (var j = i; j <= 10; j++) {
        str = str + '⭐';
    }
     str += '\n';
}
```

* 3.九九乘法表
   * 一共有9行，但是每行的个数不一样；外层的for循环控制行数i，循环9次，可以打印9行；内层的for循环控制每行公式j
  
   * 核心算法：每一行公式的个数正好和行数一致，j<=i;

   * 每行打印完毕，都需重新换一行 \n
```js
        var str = '';
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= i; j++) {
                //str += '⭐'
                //1×2=2
                str += j + '×' + i + '=' + i * j + '\t';  //\t tab键
            }
            str += '\n';
        }
        console.log(str);
```
### 5.3 while循环
语法结构
```js
while(条件表达式) {
    // 循环体
}

//执行思路：当条件表达式结果为真，则执行循环体，否则退出循环
        

var num = 1;
while (num <= 100) {
    console.log('好好好');
    num++;
}
//里面应该也有计数器，初始化变量；操作表达式，完成计数器的更新，防止死循环

```
* 1.从1岁~100岁
```js
var i = 1;
while (i <= 100) {
    console.log('这个人今年' + i + '岁了');
    i++;
}
```

* 2.计算1~100之间所有整数的和
```js
var a = 1;
var sum = 0;
while(a <= 100) {
    sum += a; 
    a++;
}
console.log(sum);
```


* 3.弹出提示框，你爱我吗？ 如果输入我爱你，就提示结束，否则一直询问。
```js
        var message = prompt(' 你爱我吗？');
        while (message !== '我爱你');{
            message = prompt(' 你爱我吗？');
        }
        alert('我也爱你呢');
```
### 5.4 do while循环
1. 语法结构
```js
        do{
           // 循环体
        } while(条件表达式)
```
2. 执行思路：跟while不同的地方在于do while 先执行一次循环体，在判断条件，如果条件表达式结果为真，则继续执行循环体，否则退出循环。do while 至少会执行一次循环体代码。
   
```js
        var i = 1;
        do {
            console.log('你好吗？');
            i++;
        } while (i <= 10)
```

* 1.打印人的1~100岁
```js
        var a = 1;
        do {
            console.log('这个人今年' + a + '岁了');
            a++;
        } while (a <= 100)
```

* 2.计算1~100之间所有整数之和
```js
        var sum = 0;
        var b = 1;
        do {
            sum += b;
            b++;
        } while (b <= 100)
        console.log(sum);
```

* 3.弹出提示框，你爱我吗？ 如果输入我爱你，就提示结束，否则一直询问。
```js
        do {
            var message = prompt('你爱我吗？');
        }while (message !=='我爱你')
        alert('我也爱你呢');
```
### 5.5 continue, break
1. continue 关键字  退出本次（当前次的循环），继续执行剩余次数的循环
```js
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; //只要遇见continue就退出本次循环，直接跳到i++
            }
            console.log('我正在吃第' + i + '个包子');
        }
```

* 1.求1~100之间，除了能被7整除之外的整数和
```js
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 7 === 0) {
                continue;
            }
            sum += i;
        }
        console.log(sum);
```

2.break 退出整个循环
```js
        for (var a = 1; a <= 5; a++) {
            if (a == 3) {
                break;
            }
            console.log('我正在吃第' + a + '个包子');
        }
```

## 6.数组
数组（Array) ：一组数据的集合，数组是一种将一组数据存储在单个变量名下的优雅方式。

其中的每个数据被称作元素，在数组中可以存放任意类型（如字符串、数字、布尔值等）的元素。

### 6.1 创建数组
1. 利用new 创建数组
```js
        var arr = new Array();  // 创建了一个空的数组（Array,A要大写）
```

2. 利用数组字面量创建数组[ ]  （最多使用的方式）
```js
        var arr = []; //创建了一个空的数组
```
* 注意：
  * 数组里面的数据一定要用逗号分隔开。数组里面的数据称为数组元素。
  * 获取数组元素   格式：数组名[索引号]   数组的索引：索引（下标）用来访问数组元素的序号（数组下标从0开始）
  * 数组可以通过索引来访问、设置、修改对应的数组元素.

```js
var arr1 = [1, 3, '老师好', true];
    console.log(arr1);
    console.log(arr1[2]);// 老师好
    console.log(arr1[3]);// true
    console.log(arr1[4]);// 因为没有这个数组元素，所以输出的结果是 undefined
```

### 6.2 遍历数组
1. 遍历数组：把数组中的每个元素从头到尾都访问一次

```js
    var arr = ['red', 'green', 'yellow'];
    for (var i = 0; i < 3; i++) {
        console.log(arr[i]);
    }
```
因为我们的数组索引号从0开始，所以i必须从0开始；输出的时候arr[i]  i计数器当索引号来用


2. 数组长度   数组名.length
   
数组的长度是元素的个数；arr.length动态监测数组元素的个数

```js
    var arr1 = ['关羽', '张飞', '马超', '赵云', '刘备'];
    for (var i = 0; i < 5; i++) {
        console.log(arr1[i]);
    }
    console.log(arr1.length)
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
```


*  案例1.求数组[2,6,1,7,4]里面所有元素的和以及平均值
  
    * 声明一个求和变量sum;遍历这个数组，把每个元素加到sum里；用求和变量sum除以数组的长度就可以得到数组平均值。
```js
    var arr = [2, 6, 1, 7, 4];
    var sum = 0;
    var average = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; // 加的是数组元素arr[i],不是计数器i
    }
    average = sum / arr.length;
    console.log(sum, average); // 想要输出多个变量，用逗号分隔即可。
```


* 案例2.求数组[2，6，77，52，25，7]中的最大值
    * 声明一个保存最大值元素的变量max;
    * 默认最大值可以取数组中的第一个元素；
    * 遍历这个数组，把里面每个数组元素和max相比较；
    * 如果这个数组元素大于max，就把这个元素存到max里面，否则继续下一轮比较；
    * 最后输出max。
```js
        var arr = [2, 6, 77, 52, 25, 7];
        var max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        console.log('该数组里面的最大值：' + max);
```


3. 数组转换为分割字符串
   
* 将数组['red','green','blue','yellow']转换为字符串，并且用|或者其他符号分割
    * 1.需要一个新变量用于存放转换完的字符串str;
    * 2.遍历原来的数组，分别把里面的数据取出来，加到字符串里；
    * 3.同时在后面加多一个分隔符

```js
        var arr = ['red','green','blue','yellow'];
        var str = '';
        var sep = '|';
        for(var i  = 0; i < arr.length; i++){
            str += arr[i] + sep;
        }
        console.log(str);
```

### 6.3 新增数组
1. 新增数组元素:修改length长度

```js
    var arr = ['red', '22', '绿的'];
    console.log(arr.length);
    arr.length = 5;// 把数组的长度修改为了5，里面应该有5个元素
    console.log(arr);
    console.log(arr[3]); // undefined
    console.log(arr[4]); // undefined
```

2. 新增数组元素:修改数组索引号，追加数组元素

```js
    var arr1 = ['red', '22', '绿的'];
    arr1[3] = 'hotdog';
    console.log(arr1);
    arr1[4] = 'blue';
    console.log(arr1);
    arr1[0] = 'yellow';// 这里是替换原来的数组元素
    console.log(arr1);
    arr1 = '有点意思';
    console.log(arr1);// 不要直接给数组名赋值，否则里面的数组元素都没有了
```

* 新建一个数组，存放1~100的整数
  * 核心原理：使用循环来追加数组
  * 1.声明一个空数组arr
  * 2.循环中的计数器i可以作为数组元素存入
  * 3.由于数组的索引号是从0开始的，因此计数器从0开始更合适，存入的数组元素要 +1
```js 
var arr = [];
for (vara i = 0; i < 100; i++){
    arr[i] = i + 1;//arr =i,不要直接给数组名赋值，否则以前的元素都没有了
}
console.log(arr);
```

### 6.4 筛选数组案例

* 将数组[2,0,6,1,77,0,52,0,25,7]中大于等于10的元素选出来，放入新的数组 
    * 1.声明一个新的数组用于存放新数据newArr；
    * 2.遍历原来的旧数组，找出大于等于10的元素；
    * 3.依次追加给新数组newArr;
```js
    var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
    var newArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            newArr[j] = arr[i]; // 新数组索引号应该从0开始，依次递增
            j += 1;
        }
    }
    console.log(newArr);

    // 方法2
    var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
    var newArr = [];
    // 刚开始newArr.length就是0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            newArr[newArr.length] = arr[i]; // 新数组索引号应该从0开始，依次递增
        }
    }
    console.log(newArr);
```

* 将数组[2,0,6,1,77,0,52,0,25,7]中的0去掉后，形成一个不包含0的新数组
    * 1.需要一个新数组用于存放筛选之后的数据
    * 2.遍历原来的数组，把不是0的数据添加到新数组里面（此时要注意采用数组名+索引的格式接收数据）
    * 3.新数组里面的个数用length不断累加
```js
    var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            newArr[newArr.length] = arr[i];
        }
    }
    console.log(newArr);
```

### 6.5 翻转数组
* 将数组['red','green','blue','pink','purple']的内容反过来存放,输出['purple','pink','blue','green','red']
    * 声明一个新数组newArr
    * 把旧数组索引号第4个取过来（arr.length-1),给新数组索引号第0个元素(newArr.length)
    * 采取递减i--
```js
    var arr = ['red', 'green', 'blue', 'pink', 'purple'];
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    console.log(newArr);
```


* 查找索引号
 ```js
        let arr = [1, 56, 66, 2, 7, 4, 1];
        let target = Number(prompt()); // 输入一个数字，查找它在数组里的索引号。
        let rst = -1; // 如果没有这个数组的元素，则不循环if里面的内容，可以直接输出rst=-1


        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                rst = i;
                break;  // 如果有重复的元素，break在找到第一个元素后就可以退出循环。
            }
        }
        alert(rst);
```

```js
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
    let rst = [];
    // [4, 6 .... 16]
    for (let i = 1; i < arr2.length; i++) {
        rst[i - 1] = arr1[i - 1] + arr2[i];
    }
    console.log(rst);
```

## 7.函数
函数：封装了一段可以重复执行调用的代码块；目的就是让大量代码重复使用。

### 7.1 函数的使用
函数的使用分为两步：声明函数 和 调用函数
1. 声明函数
```js
        function 函数名() {
        // 函数体代码
        }
```
* 注意：
    * (1)function声明函数的关键字，必须小写
    * (2)函数是做某件事情，函数名一般是动词
    * (3)函数不调用自己不执行 (声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码)
  
2. 调用函数  函数名( )； （调用函数时不要忘记加小括号）

3. 函数的封装：把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口。
   
```js
function sayHi() {
    console.log('hi');
}
sayHi(); // 调用函数
```

* 求1~100的累加和
```js
    function getSum() {
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log(sum);
    }
    getSum();
```

### 7.2 函数的参数
可以利用函数的参数实现函数重复不同的代码

1. 语法结构
```js
function 函数名(形参1,形参2...) {      
}
        函数名（实参1，实参2，...）;
```   
* 在声明函数的小括号里是形参（形式上的参数），在函数调用的小括号里是实参（实际参数）
* 多个参数之间用逗号隔开，形参可以看作是不用声明的变量。
  
2. 形参和实参的执行过程：
```js
function cook(arguments) {   // 形参是接受实参的 aru='酸辣粉'形参类似于一个变量
    console.log(arguments);
}
cook('酸辣土豆丝');
cook('rice');
// 函数的参数可以有，也可以没有，个数不限。参数的作用：在函数内部某些值不能固定，可以通过参数在调用函数时传递不同的值进去。
```

* 利用函数求任意两个数的和
```js
function getSum(num1, num2) {
    console.log(num1 + num2);
}
getSum(1, 2);
```

* 利用函数求任意两个数之间的和
```js
function getSums(start, end) {
    var sum = 0;
     for (var i = 0; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
getSums(1, 100);
```

* 尽量让实参的个数和形参相匹配。
  
    * 1.如果实参的个数和形参的个数一致，正常输出结果；
      
    * 2.如果实参的个数多于形参的个数，会取到形参的个数；
        
    * 3.如果实参的个数小于形参的个数，多余的形参定义为undefined,最终的结果就是NaN.

```js
function getSum(num1, num2) {
    console.log(num1 + num2);
}
getSum(1, 2);
getSum(1, 2, 3);
```
    
### 7.3 return
1. 函数的返回值格式
```js
        function 函数名() {
            return 需要返回的结果;
        }
        函数名();
```

* (1)函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名() 通过return实现的。
* (2)只要函数遇到return，就把后面的结果返回给函数的调用者 函数名()=return后面的结果
  
```js
function getResult() {
    return 666;
}
getResult(); // getResult() = 666
console.log(getResult());
```

* 求任意两个数的和
```js
        function getSum(num1, num2) {
            return num1 + num2;
        }
        console.log(getSum(1, 2));
```

* 利用函数求两个数的最大值
```js
function getMax(num3, num4) {
    // if (num3 > num4) {
    //     return num3;
    // } else {
    //     return num4;
    // }
    return num3 > num4 ? num3 : num4
}
console.log(getMax(1, 3));
console.log(getMax(11, 3));
```

* 利用函数求数组[5,2,99,101,67,77]中的最大数值
```js
        function getArrMax(arr) {   // arr接受一个数组
            var max = arr[0];
            for (var i = 1; i <= arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
        // getArrMax[5,2,99,101,67,77]; // 实参是一个数组送过去给形参那
        // 实际开发里，常用一个变量来接受函数的返回结果，使用更简单。
        var re = getArrMax([5, 2, 99, 101, 67, 77]);
        console.log(re);
```

2. 函数返回值注意事项

*  (1) return终止函数,return后面的代码不会被执行
```js
        function getSum(num1, num2) {
            return num1 + num2;   // return后面的代码不会被执行
            alert('这个不会被执行');
        }
        console.log(getSum(1, 2));
```
* (2) return只能返回一个值,返回的结果是最后一个值
```js
        function fn(num1, num2) {
            return num1, num2; // 返回的结果是最后一个值
        }
        console.log(fn(1, 2));
```

* (3) 求任意两个数的加减乘除结果,返回的是一个数组
```js
        function getResult(num1, num2) {
            return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
        }
        var re = getResult(1, 2);  // 返回的是一个数组
        console.log(re);
```
* (4) 函数如果有return，则返回的是return后面的值，如果函数没有return，则返回undefined
```js
        function fun1() {
            return 666;
        }
        console.log(fun1()); // 返回666


        function fun2() {

        }
        console.log(fun2()); //返回的结果是undefined
```


* break：结束当前的循环体（如for、while）

* continue：跳出本次循环，继续执行下次循环（如for、while）

* return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码

###  7.4 arguments
1. arguments的使用,只有函数才有arguments对象，而且是每个函数都内置好了这个arguments

```js
function fn() {
    // console.log(arguments); // 里面存储了所有传递过来的实参 arguments = [1, 2, 3]
    // console.log(arguments.length);
    // console.log(arguments[2]);
    // 可以按照数组的方式遍历arguments
    for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
    fn(1, 2, 3);
    fn(1, 2, 3, 4, 5);
```

* 伪数组，并不是真正意义上的数组
    * 1.具有数组的length属性；
    * 2.按照索引的方式进行存储的；
    * 3.它没有真正数组的一些方法 pop(),push() 

* 利用函数求任意个数的最大值
```js
    function getMax() {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }
    console.log(getMax(1, 233, 3, 55));
```

### 7.5 函数相互调用
* (1) 利用函数翻转任意数组  reverse翻转
```js
    function reverse(arr) {
        var newArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i];
        }
        return newArr;
    }
    var arr1 = reverse([1, 3, 5, 7]);
    console.log(arr1);

    var arr2 = reverse(['red', 'blue', 'pink', 'green']);
    console.log(arr2);
```

* (2) 利用函数判断闰年 （如果是闰年就返回true，否则返回false）
```js
    function isRunYear(year) {
        var flag = false;
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            flag = true;
        }
        return flag;
    }
    console.log(isRunYear(2000));
```

1. 函数是可以相互调用的
```js
function fn1() {
    console.log(11);
    fn2();    // 在fn1函数里面调用了fn2函数
}
fn1();

function fn2() {
    console.log(22);
}
```

```js
function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
}

function fn2() {
    console.log(222);
    console.log('fn2');
}
fn1();

// 先跑到 console.log(111)，打印出111； 然后往下走到fn2()，去调用fn2的 console.log(222)，打印出222，fn2；执行完fn2函数；再去执行console.log('fn1')，打印出fn1。
// 最后结果: 111，222，fn2，fn1
```


* (1) 用户输入年份，输出当前年份2月份的天数（闰年的2月份29天，平年2月份28天）

```js
        function backDay() {
            var year = prompt('输入年份：');
            if (isRunYear(year)) {   //调用函数需要加小括号
                alert('当前年份是闰年2月份有29天');
            } else {
                alert('当前年份是平年2月份有28天');
            }
        }
        backDay();
```

* (2) 利用函数判断闰年 （如果是闰年就返回true，否则返回false）
```js
        function isRunYear(year) {
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                flag = true;
            }
            return flag;
        }
```

### 7.6 匿名函数
函数的2种声明方式

1. 利用函数关键字自定义函数（命名函数）
```js
function fn() {

}
fn();
```

2. 函数表达式（匿名函数）
var 变量名 = function() { };
```js
var fun = function (aru) {
    console.log('我是函数表达式');
    console.log(aru);
}
fun('大家好');
```
* (1) fun是变量名，不是函数名
* (2) 函数表达式声明跟声明变量差不多，只不过变量里存的是值，而函数表达式里面存的是函数
* (3) 函数表达式也可以进行传递参数

### 7.7 变量的作用域
变量的作用域：根据作用域的不同我们变量分为全局变量和局部变量

1. 全局变量：在全局作用域下的变量，在全局下都可以使用
* 注意：如果在函数内部，没有声明直接赋值的变量也属于全局变量

```js
        var num = 10;   //num就是一个全局变量
        console.log(num);

        function fn() {
            console.log(num);
        }
        fn();
```

2. 局部变量 在局部作用域下的变量或者在函数内部的变量
```js
        function fun() {
            var num1 = 18; // num1就是局部变量，只能在函数内部使用
            num2 = 28;
        }
        fun();
        // console.log(num1);
        console.log(num2); 
```

3. 作用域链 : 内部函数访问外部的函数的变量，采取的是链式查找的方法来决定取那个值，这种结构称为作用域链  就近原则
```js
        var num = 19;

        function fn() {  //外部函数
            var num = 29;

            function fun() { //内部函数
                console.log(num);
            }
            fun();
        }
        fn();
```

```js
        function f1() {
            var num = 123;

            function f2() {
                console.log(num); // 站在目标出发，一层一层往外查找 
            }
            f2();
        }
        var num = 456;
        f1();  // 结果是123  
```

### 7.8 JavaScript作用域
1. JavaScript作用域,就是代码名字（变量）在某个范围内起作用和效果，目的是为了提高程序的可靠性，更重要的是减少命名冲突
   
2. js的作用域（es6）之前：全局作用域，局部作用域 
   
* (1) 全局作用域：整个script标签，或者是一个单独的js文件
```js
        var num = 10;
        console.log(num);
```

* (2) 局部作用域（函数作用域）: 在函数内部就是局部作用域，这个代码的名字只在函数内部起效果和作用
```js
        function fn() {
            // 局部作用域
            var num = 20;
            console.log(num);
        }
        fn();
```
### 7.9 对象
对象：在js中对象是一组无序的相关属性和方法的集合，所有事物都是对象，例如字符串、数值、数组、函数等。

* 对象由属性和方法组成的
    * 属性：事物的特征，在对象中用属性来表示（常用名词）
    * 方法：事物的行为，在对象中用方法来表示（常用动词）

1. 利用对象字面量创建对象 { }

* 对象字面量：就是花括号{}里面包含了表达这个具体事物（对象）的属性和方法。
var obj = {};   创建了一个空的对象
```js
var obj = {
    uname: '张三疯',
    age: 18,
    sex: 'man',
    sayHi: function () {
    console.log('hi!');
    }
}
```

* (1) { }里面的属性或者方法采取键值对的形式 
  * 键(相当于属性名）：值(相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型、函数类型等））
  
* (2)多个属性或者方法中间用逗号隔开的
  
* (3)方法冒号后面跟的是一个匿名函数

* 使用对象
    * (1)对象名.属性名  
  
        console.log(obj.uname);调用对象的属性

    * (2)对象名['属性名']  

        console.log(obj['age']);方括号里面的属性必须加引号

    * (3)对象名.方法名( )  

        obj.sayHi();调用对象的方法,千万记得添加小括号

2. 利用new Object 创建对象
```js
        var obj = new Object();  //创建了一个空的对象
        obj.uname = '张三疯';
        obj.age = 11;
        obj.sex = '女';
        obj.sayHi = function () {
            console.log('hi');
        }
    //利用“等号 = 赋值”的方法，添加对象的属性和方法，每个属性和方法之间用分号结束。
        console.log(obj.uname);
        console.log(obj['sex']);
        obj.sayHi();
```

3. 利用构造函数创建对象

* 为什么需要使用构造函数？  因为前面两种创建对象的方式一次只能创建一个对象
  
  * 一次创建一个对象，里面有很多的属性和方法是大量相同的，可以利用函数的方法，重复这些相同的代码，把这个函数称为“构造函数”
  * 又因为这个函数不一样，里面封装的不是普通代码，而是对象
  * 构造函数，就是把对象里面一些相同的属性和方法抽象出来封装到函数里面 
```js
        var ldh = {
            uname: '刘德华',
            age: 22,
            sing: function () {
                console.log('冰雨');
            }
        }
```

构造函数的语法格式
```js
function 构造函数名() {
    this.属性 = 值；
    this.方法 = function () { }
}
new 构造函数名（）；
```

案例：创建四大天王的对象  相同的属性：名字，年龄，性别；    相同的方法：唱歌
```js
function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
        console.log(sang);
    }
}

var ldh = new Star('刘德华', 12, '男'); // 调用函数返回的是一个对象
// console.log(typeof ldh);
console.log(ldh.name);
console.log(ldh['sex']);
ldh.sing('冰雨');

var zxy = new Star('张学友', 133, '男');
console.log(zxy.name);
console.log(zxy.age);
zxy.sing('李香兰');
```
* 构造函数名字首字母要大写
* 构造函数不需要return就可以返回结果
* 调用构造函数必须使用new
* 只要new Star() 调用函数就创建了一个对象
* 属性和方法前面必须要加 this


