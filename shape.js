class Circle {
    corners (){
        console.log('Circle does not have any corners')
    }

    sides(){
        console.log('Circle has one side')
    }
}

class Retangle{
    corners (){
        console.log('Retangle has 4 corners')
    }

    sides(){
        console.log('Retangle has 4 side')
    }
}

const cornersTest = (shape) => {
    shape.corners()
}

const shape1 = new Circle()
const shape2 = new Retangle()

cornersTest(shape1)
cornersTest(shape2)