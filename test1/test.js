const { test } = QUnit;

QUnit.module("ELLENŐRZÉS METÓDUS", (hook)=> {
    hook.before(()=>{
        this.lojatek=new LOJatek(0);
    });
    QUnit.test("Létezik-e az ellenőrzés metódus",(assert)=> {
        /* console.log(this.lojatek.ellenorzes); */
        assert.ok(this.lojatek.ellenorzes, "Létezik");
        });
    QUnit.test("Függvény-e az ellenőrzés metódus? ",(assert)=> {
        /* console.log(typeof this.lojatek.ellenorzes); */
        assert.ok(typeof this.lojatek.ellenorzes==="function","Függvény");
    });
    QUnit.test("Minden lámpa felkapcsolva?",(assert)=> {
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            console.log("...");
            lampak[index].allapot=true;
        }
        assert.equal(this.lojatek.ellenorzes(),(9));
    });
    QUnit.test("Minden lámpa Lekapcsolava?",(assert)=> {
        console.log(meret*meret);
        for (let index = 0; index < meret*meret; index++) {
            console.log("...");
            lampak[index].allapot=false;
        }
        assert.equal(this.lojatek.ellenorzes(),(0));
        /* console.log(this.lojatek.ellenorzes()); */
    });
    QUnit.test("Kiinduláskor néhány elem felkapcsolva (5)",(assert)=> {
        this.lojatek=new LOJatek(5);
        /* console.log(this.lojatek.ellenorzes()); */
        assert.equal(this.lojatek.ellenorzes(),(5));
    });
  });