# 🍰 split-slice

/* There will be normal documentation. Someday.. */

```javascript
const splitSlice = require('./index.js')

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const none = splitSlice()
    , sliceandslice = splitSlice(text, 50)
    , space = splitSlice(text, 50, { space: true })
    , alignandspace = splitSlice(text, 50, { space: true, align: 'right' })
    , hyph = splitSlice(text, 50, { hyph: true })
    , alignandhyph = splitSlice(text, 50, { hyph: true, align: 'left' })

console.log('none -->', none.join('\n'))
console.log('\n')
console.log('split and slice -->')
console.log(sliceandslice.join('\n'))
console.log('\n')
console.log('space -->')
console.log(space.join('\n'))
console.log('\n')
console.log('align and space -->')
console.log(alignandspace.join('\n'))
console.log('\n')
console.log('hyph -->')
console.log(hyph.join('\n'))
console.log('\n')
console.log('align and hyph -->')
console.log(alignandhyph.join('\n'))
console.log('\n')
```

## Output

```bash
none -->


split and slice -->
Lorem Ipsum is simply dummy text of the printing a
nd typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500
s, when an unknown printer took a galley of type a
nd scrambled it to make a type specimen book. It h
as survived not only five centuries, but also the
leap into electronic typesetting, remaining essent
ially unchanged. It was popularised in the 1960s w
ith the release of Letraset sheets containing Lore
m Ipsum passages, and more recently with desktop p
ublishing software like Aldus PageMaker including
versions of Lorem Ipsum.


space -->
Lorem Ipsum is simply dummy text of the printing  
and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the     
1500s, when an unknown printer took a galley of type  
and scrambled it to make a type specimen book. It  
has survived not only five centuries, but also the
leap into electronic typesetting, remaining       
essentially unchanged. It was popularised in the 1960s  
with the release of Letraset sheets containing     
Lorem Ipsum passages, and more recently with desktop  
publishing software like Aldus PageMaker including
versions of Lorem Ipsum.  


align and space -->
      Lorem Ipsum is simply dummy text of the printing  
     and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the     
  1500s, when an unknown printer took a galley of type  
     and scrambled it to make a type specimen book. It  
     has survived not only five centuries, but also the
      leap into electronic typesetting, remaining       
essentially unchanged. It was popularised in the 1960s  
     with the release of Letraset sheets containing     
  Lorem Ipsum passages, and more recently with desktop  
     publishing software like Aldus PageMaker including
                              versions of Lorem Ipsum.  


hyph -->
Lorem Ipsum is simply dummy text of the printing a-
nd typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500
s, when an unknown printer took a galley of type a-
nd scrambled it to make a type specimen book. It h-
as survived not only five centuries, but also the
leap into electronic typesetting, remaining essent-
ially unchanged. It was popularised in the 1960s w-
ith the release of Letraset sheets containing Lore-
m Ipsum passages, and more recently with desktop p-
ublishing software like Aldus PageMaker including
versions of Lorem Ipsum.


align and hyph -->
Lorem Ipsum is simply dummy text of the printing a-
nd typesetting industry. Lorem Ipsum has been the  
industry's standard dummy text ever since the 1500
s, when an unknown printer took a galley of type a-
nd scrambled it to make a type specimen book. It h-
as survived not only five centuries, but also the  
leap into electronic typesetting, remaining essent-
ially unchanged. It was popularised in the 1960s w-
ith the release of Letraset sheets containing Lore-
m Ipsum passages, and more recently with desktop p-
ublishing software like Aldus PageMaker including  
versions of Lorem Ipsum.                           
```
