export const settings = {
    canvas: {
        id: 'popcorn',
    },
    sprite: "sprite.png",
    popcorns: [
        {
            sx: 0,
            sy: 0,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 0,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 50,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 50,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }
        , {
            sx: 0,
            sy: 100,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 100,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 150,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 150,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 200,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 200,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }
    ],
    corns: [
        {
            sx: 100,
            sy: 0,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        }, {
            sx: 100,
            sy: 125,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        }, {
            sx: 125,
            sy: 0,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        },{
            sx: 125,
            sy: 125,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        },
    ],
    projectiles: {
        magnitude: {
            min: 1,
            max: 6
        },
        angle: {
            min: -0.5,
            max: 0.5
        },
        acceleration: {
            min: 0.01,
            max: 0.05
        },
        rotation: 0.1
    },
}