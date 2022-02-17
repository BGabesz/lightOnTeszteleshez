const { test } = QUnit;

QUnit.module("SZOMSZEDOKVALTOZTATASA METÓDUS", (hook)=> {
    hook.before(()=>{
        this.lojatek=new LOJatek(0);
    });
    QUnit.test("Létezik-e az szomszedokValtoztatasa metódus",(assert)=> {
        assert.ok(this.lojatek.szomszedokValtoztatasa, "Létezik");
        });
    QUnit.test("Függvény-e az szomszedokValtoztatasa metódus?",(assert)=> {
        /* console.log(typeof this.lojatek.ellenorzes); */
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa==="function","Függvény");
    });
    
    QUnit.test("Középső lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(4);
        console.log(lampak);
        console.log("Folso kozepso");
        console.log(lampak[1].allapot);
        console.log("Also kozepso");
        console.log(lampak[7].allapot);
        console.log("Jobb kozepso");
        console.log(lampak[5].allapot);
        console.log("Bal kozepso");
        console.log(lampak[5].allapot);
        for (let index = 0; index < meret*meret; index++) {
            console.log("Elem: "+index+" : "+lampak[index].allapot);
            assert.equal(lampak[index].allapot,(true));
        }
        //2.,4.,6.,8. elem okt,obbi elemet nem váltja át ezért false
    });
    QUnit.test("Bal felső sorban lévő lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(0);
        for (let index = 0; index < meret*meret; index++) {
            assert.equal(lampak[index].allapot,(true));
        }
        //2.es a 4.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Jobb felső sorban lévő lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(2);
        for (let index = 0; index < meret*meret; index++) {
            assert.equal(lampak[index].allapot,(true));
        }
        //2.es a 6.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Bal alsó sorban lévő lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(6);
        for (let index = 0; index < meret*meret; index++) {
            assert.equal(lampak[index].allapot,(true));
        }
        //4.es a 8.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Jobb alsó sorban lévő lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(8);
        for (let index = 0; index < meret*meret; index++) {
            assert.equal(lampak[index].allapot,(true));
        }
        //6.es a 8.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Jobb szélső középsőlévő lámpát kapcsoljuk",(assert)=> {
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(5);
        for (let index = 0; index < meret*meret; index++) {
            assert.equal(lampak[index].allapot,(true));
        }
        //3.,5.,9.elem ok,/tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Bal szélső középsőlévő lámpát kapcsoljuk",(assert)=> {
        //nem jó
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(3);
        for (let index = 0; index < meret*meret; index++) {
            console.log(lampak[index].allapot);
            assert.equal(lampak[index].allapot,(true));
        }
        //1.,5.,7.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Első sor  középsőlévő lámpát kapcsoljuk",(assert)=> {
        //nem jó
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(1);
        for (let index = 0; index < meret*meret; index++) {
            console.log(lampak[index].allapot);
            assert.equal(lampak[index].allapot,(true));
        }
        //1.,3.,5.elem ok,tobbi elemet nem váltja át ezért false
    });
    QUnit.test("Utolsó sor  középsőlévő lámpát kapcsoljuk",(assert)=> {
        //nem jó
        this.lojatek=new LOJatek(0);
        /* console.log(this.lojatek.ellenorzes()); */
        for (let index = 0; index < meret*meret; index++) {
            lampak[index].allapot=false;
        }
        this.lojatek.szomszedokValtoztatasa(7);
        for (let index = 0; index < meret*meret; index++) {
            console.log(lampak[index].allapot);
            assert.equal(lampak[index].allapot,(true));
        }
        //5.7.,9.elem ok,tobbi elemet nem váltja át ezért false
    });
  });