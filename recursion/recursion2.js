let categories = [
  { name: 'animals', parent: null },
  { name: 'mammals', parent: 'animals'},
  { name: 'homo', parent: 'mammals'},
  { name: 'cats', parent: 'mammals'},
  { name: 'dogs', parent: 'mammals'},
  { name: 'labrador', parent: 'dogs'},
  { name: 'siamese', parent: 'cats' },
  { name: 'homo sapiens', parent: 'homo'},
  { name: 'homo erectus', parent: 'homo'}
]

let buildTree = (list,parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c=> node[c.name] = buildTree( list, c.name ))
  return node
}

console.log(JSON.stringify(buildTree(categories, null) , null, 2))

/*
  {
    animals{
      mammals{
        homo{
          homo sapiens: null 
          homo erectus: null
        }
        cats{
          siamese: null
        }
        dogs{
          labrador: null
        }
      }
    }
  }
*/