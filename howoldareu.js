/**
 * Created by 55vit on 19.06.2017.
 */
while(true){
    var test = +prompt('Введите число больше 100','');
    if(test<=100){
        alert('Это число меньше 100');
    }
    else if(!test){
        alert('Это не число введите число');
    }
    else {
        alert('То что надо');
        break;
    }
}