//1.遍历数组：把数组中的每个元素从头到尾都访问一次
var arr = ['red', 'green', 'yellow'];
// for (var i = 0; i < 3; i++) {
//     console.log(arr[i]);
// }
//因为我们的数组索引号从0开始，所以i必须从0开始；输出的时候arr[i]  i计数器当索引号来用

//2.数组长度  数组名.length
var arr1 = ['关羽', '张飞', '马超', '赵云', '刘备'];
// for (var q = 0; q < 5; q++) {
//     console.log(arr1[q]);
// }
// console.log(arr1.length)
for (var q = 0; q < arr1.length; q++) {
    console.log(arr1[q]);
}
//数组的长度是元素的个数；arr.length动态监测数组元素的个数