var source = document.querySelector('select#source');
var destination = document.querySelector('select#destination');

var models = [
  { name: 'Japan', value: 'JP' },
  { name: 'Turkey', value: 'TK' },
  { name: 'South Africa', value: 'SA' },
  { name: 'Ghana', value: 'GH' },
  { name: 'Nigeria', value: 'NG' },
  { name: 'Australia', value: 'AU' },
  { name: 'Germany', value: 'GE' },
  { name: 'Egypt', value: 'EG' }
]

var controller = new Controller(source, destination, models);