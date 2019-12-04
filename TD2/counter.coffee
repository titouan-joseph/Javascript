class counter
  constructor: () ->
    @count = 0

  tick: ->
    @count++
    console.log(@count)

myCounter = new counter()
myCounter.tick()
myCounter.tick()
setTimeout(myCounter.tick, 10)