class Titulo extends Phaser.Scene {
    constructor() {
        super({ key: 'Titulo'})
    }
    preload() {
        this.load.image("pantalla de titulo", "./assets/pantallatitulo.png")
    }
    create() {
        let game = this
        this.add.sprite(0,0,"pantalla de titulo").setOrigin(0,0)
        this.add.rectangle(108, 410, 140, 260, 0xffffff)
        this.add.text(50, 300, "Creditos:\n\tProgramación:\n\t\tMinoru Recio\n\tSprites:\n\t\tKaori Recio\n\tIconos:\n\t\tSciGho\n\t\tghostpixxells\n\t\tPoloviiinkin\n\t\tNikoichu", {font: "18px CustomFont"}).setTint(0x000000)
        this.add.text(640, 540, "Da click para iniciar", {font: "28px CustomFont"}).setOrigin(0.5,0).setTint(0x000000)
        this.input.on('pointerdown', () => {
			this.scene.stop('Titulo')
			this.scene.start('juego')
		})
    }
}