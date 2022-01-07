# grock-algorithms-book
*Synopsis and tasks from the book "Grock Algorithms"*

# Грокаем алгоритмы (конспект)

# Конспект книги «Грокаем алгоритмы» Адитья Бхаргава

## Глава 1. Знакомство с алгоритмами

**Алгоритм** - набор инструкций для выполнения задачи.

**Бинарный поиск** - алгоритм, который получает на вход отсортированный список элементов, если элемент, который вы ищите, есть в списке, то бинарный поиск возвращает ту позицию, в которой он был найден. В противном случае возвращает null.

### Как работает?

1. Определение значения элемента в середине структуры данных. Полученное значение сравнивается с ключом.
2. Если ключ меньше значения середины, то поиск осуществляется в первой половине элементов, иначе — во второй.
3. Поиск сводится к тому, что вновь определяется значение серединного элемента в выбранной половине и сравнивается с ключом.
4. Процесс продолжается до тех пор, пока не будет найден элемент со значением ключа или не станет пустым интервал для поиска.

### Реализация алгоритма на JavaScript:

```
function binary_search(array, item) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = array[mid];

		if (guess == item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

my_array = [1, 3, 5, 7, 9];
console.log(binary_search(my_array, 5));
```

**Линейное время** - время, когда максимальное количество попыток совпадает с размером списка.

«О-большое» описывает скорость работы алгоритма.«О-большое» определяет худшее время выполнения алгоритма.

## Глава 2. Сортировка выбором

**Сортировка выбором** - алгоритм сортировки.

### Как работает?

1. находим номер минимального значения в текущем списке
2. производим обмен этого значения со значением первой неотсортированной позиции
3. теперь сортируем хвост списка, исключив из рассмотрения уже отсортированные элементы

### Реализация алгоритма на JavaScript:

```
function findSmallest(arr) {
	let smallest = arr[0];
	let smallest_index = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallest_index = i;
		}
	}

	return smallest_index;
}

function selectionSort(arr) {
	newArr = [];

	for (let i = 0; i < arr.length; i++) {
		smallest = findSmallest(arr);
		newArr.push(arr.splice(arr.indexOf(smallest), 1));
	}

	return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
```

*Чтение*: массивы - O(1) списки - O(n)*Вставка*: массивы - O(n) списки - O(1)*Удаление*: массивы - O(n) списки - O(1)

## Глава 3. Рекурсия

**Рекурсия** - вызов функцией самой себя.

> "Циклы могут ускорить работу программы. Рекурсия может ускорить работу программиста. Выбирайте, что важнее в вашей ситуации!" - Ли Колдуэлл
> 

Каждая рекурсивная функция состоит из двух случаев: **базовый** и **рекурсивный**.

### Пример рекурсивной функции для подсчёта суммы элементов массива:

```
function sum(arr) {
	if (arr.length == 1) {
		return arr[0];
	}

	return arr[0] + sum(arr.slice(1));
}
```

**Стек** - простая структура данных, в которой новый элемент добавляется в начало, последний элемент извлекается из начала.

![https://habrastorage.org/getpro/habr/upload_files/618/a15/e2f/618a15e2ff1914f4c879275f1e871566.jpg](https://habrastorage.org/getpro/habr/upload_files/618/a15/e2f/618a15e2ff1914f4c879275f1e871566.jpg)

Когда вы вызываете функцию из другой функции, вызывающая функция приостанавливается в частично завершенном состоянии.

**Стек вызовов** - стек, в котором сохранялись переменные разных функций.

Все вызовы функций сохраняются в стеке вызовов.

## 4. Быстрая сортировка

Один из самых быстрых универсальных алгоритмов сортировки массивов. Из-за наличия ряда недостатков на практике обычно используется с некоторыми доработками.

### Как работает?

1. Выбрать опорный элемент из массива.
2. *Разбиение*: перераспределение элементов в массиве таким образом, что элементы, меньшие опорного, помещаются перед ним, а большие или равные - после.
3. Рекурсивно применить первые два шага к двум подмассивам слева и справа от опорного элемента. Рекурсия не применяется к массиву, в котором только один элемент или отсутствуют элементы.

### Реализация алгоритма на JavaScript:

```
function quicksort(array) {
	if (array.length < 2) return array;

	let pivot = array[0];
	const left = [];
	const right = [];

	for (let i = 1; i < array.length; i++) {
		if (pivot > array[i]) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return quicksort(left).concat(pivot, quicksort(right));
}
```

**Совет:** когда вы пишите рекурсивную функцию, в которой задействован массив, базовым случаем часто оказывается пустой массив или массив из одного элемента.

Среднее время выполнения быстрой сортировки составляет O(n log n).

## 5. Хэш-таблицы

**Хэш-функция** - функция, которая получает строку и возвращает число.

Хэш-функция должна соответствовать требованиям:- Должна быть последовательной- Разным словам должны соответствовать разные числа

Хэш-функция неизменно связывает название с одним индексом, связывает разные строки с разными индексами, знает размер массива и возвращает только действительные индексы.

> хэш-таблица = хэш-функция + массив
> 

Хэш-таблица состоит из ключей и значений.

Примеры использования хэш-таблиц:- Поиск- Исключение дубликатов- Кэш

**Кэширование** - запомнить данные, вместо того, чтобы пересчитать их заново.

Преимущества кэширования:- Скорость- Меньшая затрата ресурсов сервера

Кешируемые данные хранятся в хэше.

**Коллизия** - двум ключам назначается один элемент массива.

Хорошая хэш-функция создаёт минимальное число коллизий.

В среднем хэш-таблицы выполняют любые операции за время O(1). То есть при любом размере хэш-таблицы выборка данных займёт одинаковое время.

Для предотвращения коллизий необходимы:- низкий коэффициент заполнения- хорошая хэш-функция

## 6. Поиск в ширину

**Поиск в ширину** - это алгоритм для решения задачи поиска кратчайшего пути.

Позволяет найти кратчайшее расстояние между двумя объектами.

Алгоритм работает с графами. Он помогает ответить на вопросы:- существует ли путь от узла A к узлу B?- как выглядит кратчайший путь от узла A к узлу B?

### Как работает?

1. Поместить узел, с которого начинается поиск, в изначально пустую очередь.
2. Извлечь из начала очереди узел U и пометить его как развёрнутый.
    - Если узел U является целевым узлом, то завершить поиск с результатом «успех».
    - В противном случае, в конец очереди добавляются все преемники узла U, которые ещё не развёрнуты и не находятся в очереди.
3. Если очередь пуста, то все узлы связного графа были просмотрены, следовательно, целевой узел недостижим из начального; завершить поиск с результатом «неудача».
4. Вернуться к п. 2.

### Реализация алгоритма на JavaScript:

```
let graph = {};

graph['you'] = ['alice', 'bob', 'clarie'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['clarie'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function person_is_seller(name) {
	return name[name.length - 1] == 'm';
}

function search(name) {
	let search_queue = [];
	search_queue = search_queue.concat(graph[name]);
	let searched = [];

	while (search_queue) {
		person = search_queue.shift();
		if (!searched.includes(person)) {
			if (person_is_seller(person)) {
				console.log(person + ' is a mango seller!');
				return true;
			} else {
				search_queue = search_queue.concat(graph[person]);
				searched.push(person);
			}
		}
	}
	return false;
}

search('you');
```

**Направленный граф** - граф в котором отношения между узлами, действуют только в одну сторону.

Поиск в ширину выполняется за время O(кол-во вершин + кол-во рёбер).

## 7. Алгоритм Дейкстры

С каждым ребром графа связывается число - **вес**.

**Взвешенный граф** - граф с весами.**Невзвешенный граф** - граф без весов.

Алгоритм Дейкстры вычисляет кратчайший путь во взвешенном графе.

### Как работает?

1. Найти узел с наименьшей стоимостью
2. Обновить стоимости соседей
3. Повторять, пока это не будет сделано для всех узлов графа
4. Вычислить итоговый путь

### Реализация алгоритма на JavaScript:

```
function find_lowest_cost_node(costs) {
	lowest_cost = Infinity;
	lowest_cost_node = null;
	for (let node in costs) {
		cost = costs[node];
		if (cost < lowest_cost && !processed.includes(node)) {
			lowest_cost = cost;
			lowest_cost_node = node;
		}
	}
	return lowest_cost_node;
}

let graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

let costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

let parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

let node = find_lowest_cost_node(costs);
while (node != null) {
	cost = costs[node];
	neighbors = graph[node];
	for (let n = 0; n < neighbors.length; n++) {
		new_cost = cost + neighbors[n];
		if (costs[n] > new_cost) {
			costs[n] = new_cost;
			parents[n] = node;
		}
	}
	processed.push(node);
	node = find_lowest_cost_node(costs);
}
```

Алгоритм Дейкстры работает только с направленными ациклическими графами.

> Ключевая идея Алгоритма Дейкстры: в графе ищется путь с наименьшей стоимостью. Пути к этому узлу с меньшими затратами не существует.
> 

Проходя по родительским узлам в обратном направлении, мы получаем полный путь.

Кратчайший путь далеко не всегда связывается с физическим расстоянием: он может быть направлен на минимизацию какой-либо характеристики.

Алгоритм Дейкстры не может использоваться при наличии рёбер с отрицательным весом. Для этого используется алгоритм Беллмана-Форда.

## 8. Жадные алгоритмы

**В технической треминологии:** на каждом шаге выбирается локально-оптимальное решение, а в итоге вы получаете глобально-оптимальное решение.

Как работает?

1. Доказывается, что жадный выбор на первом шаге не закрывает пути к оптимальному решению: для всякого решения есть другое, согласованное с жадным выбором и не хуже первого.
2. Показывается, что подзадача, возникающая после жадного выбора на первом шаге, аналогична исходной.
3. Рассуждение завершается по индукции.

В некоторых случаях достаточно алгоритма, способного решить задачу достаточно хорошо. Жадные алгоритмы реализуются просто, а полученное решение обычно близко к оптимуму.

Когда вычисление точного решения занимает слишком много времени, применяется приближенный алгоритм.

Эффективность приближенного алгоритма оценивается по:- быстроте- близости полученного решения к оптимальному

## 9. Динамическое программирование

**Динамическое программирование** - мощный метод, способный решать подзадачи и использовать полученные ответы для решения большой задачи. Динамическое программирование работает только в том случае, если каждая подзадача автономна, то есть не зависит от других подзадач.

Динамическое программирование применяется для оптимизации какой-либо характеристики при заданных ограничениях.

## 10. Алгоритм k ближайших соседей

> Если вы пытаетесь выполнить классификацию чего-либо, сначала попробуйте применить алгоритм k ближайших соседей.
> 

Основные применения: **классификация** и **регрессия**:1. классификация = распределение по категориям2. регрессия = прогнозирование ответа (в числовом выражении)

"Извлечение признаков" - преобразование элемента в список чисел, которые могут использоваться для сравнения.

Качественный выбор признаков - важная часть успешного алгоритма k ближайших соседей.
