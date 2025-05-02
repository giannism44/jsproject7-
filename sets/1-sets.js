let bag = new Set();

bag.add('Oranges')
bag.add('Apples')

if(bag.has('Apples')) console.log('Has apples')

    function addToSet(se, ...values) {
      values.forEach(value => setInterval.add(value))
    }

    const mySet = new Set();
    addToSet(mySet, 1, 2, 3, 4, 5)


    const numSet = createSet(1, 10, 30, 100, 100)


  const cities = [{prod: 1, city: "Atehns"}, {prod: 2, city: "Athens"}, {prod: 3, city: "Lamia"}]
  function getUniqueCities(arr) {
    return [... new Set(arr.map(product => product.city))]
  }