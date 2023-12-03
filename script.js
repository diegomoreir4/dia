let bananas = 0;
let dolares = 1000;
let ouro = 0;
let bananasPorClique = 2;
let dolaresPorClique = 1.8;
let bananaAutomatico = 1;
let dolarAutomatico = 0.9;
let nivel = "Nivel Iniciante";
let totalBananas = 0;
let recompensaNivel1Concedida = false;
let recompensaNivel2Concedida = false;
let recompensaNivel3Concedida = false;
let recompensaNivel4Concedida = false;
let recompensaNivel5Concedida = false;
let recompensaNivel6Concedida = false;
let recompensaNivel7Concedida = false;
let recompensaNivel8Concedida = false;
let recompensaNivel9Concedida = false;
let recompensaNivel10Concedida = false;
let recompensaNivel11Concedida = false;
let recompensaNivel12Concedida = false;
let recompensaNivel13Concedida = false;
let recompensaNivel14Concedida = false;
let recompensaNivel15Concedida = false;
let recompensaNivel16Concedida = false;
let recompensaNivel17Concedida = false;
let recompensaNivel18Concedida = false;
let recompensaNivel19Concedida = false;
let recompensaNivel20Concedida = false;
let bananasDouradas = 100;
let numeroVolatil = 100000;

function clicarBanana() {
    bananas += bananasPorClique;
    dolares -= dolaresPorClique;
    totalBananas += bananasPorClique;
    updateDisplay();
    checkNivel();
    verificarNivel();
}

function checkNivel() {
    if (totalBananas >= 10000000) {
        nivel = "Nível 20";
        if (!recompensaNivel20Concedida) {
            ouro += 100000;
            recompensaNivel20Concedida = true;
        }
        recompensaNivel19Concedida = false;
    } else if (totalBananas >= 5000000) {
        nivel = "Nível 19";
        if (!recompensaNivel19Concedida) {
            ouro += 50000;
            recompensaNivel19Concedida = true;
        }
        recompensaNivel18Concedida = false;
    } else if (totalBananas >= 2500000) {
        nivel = "Nível 18";
        if (!recompensaNivel18Concedida) {
            ouro += 25000;
            recompensaNivel18Concedida = true;
        }
        recompensaNivel17Concedida = false;
    } else if (totalBananas >= 1500000) {
        nivel = "Nível 17";
        if (!recompensaNivel17Concedida) {
            ouro += 15000;
            recompensaNivel17Concedida = true;
        }
        recompensaNivel16Concedida = false;
    } else if (totalBananas >= 1000000) {
        nivel = "Nível 16";
        if (!recompensaNivel16Concedida) {
            ouro += 10000;
            recompensaNivel16Concedida = true;
        }
        recompensaNivel15Concedida = false;
    } else if (totalBananas >= 500000) {
        nivel = "Nível 15";
        if (!recompensaNivel15Concedida) {
            ouro += 5000;
            recompensaNivel15Concedida = true;
        }
        recompensaNivel14Concedida = false;
    } else if (totalBananas >= 300000) {
        nivel = "Nível 14";
        if (!recompensaNivel14Concedida) {
            ouro += 3000;
            recompensaNivel14Concedida = true;
        }
        recompensaNivel13Concedida = false;
    } else if (totalBananas >= 200000) {
        nivel = "Nível 13";
        if (!recompensaNivel13Concedida) {
            ouro += 2000;
            recompensaNivel13Concedida = true;
        }
        recompensaNivel12Concedida = false;
    } else if (totalBananas >= 150000) {
        nivel = "Nível 12";
        if (!recompensaNivel12Concedida) {
            ouro += 1500;
            recompensaNivel12Concedida = true;
        }
        recompensaNivel11Concedida = false;
    } else if (totalBananas >= 100000) {
        nivel = "Nível 11";
        if (!recompensaNivel11Concedida) {
            ouro += 1000;
            recompensaNivel11Concedida = true;
        }
        recompensaNivel10Concedida = false;
    } else if (totalBananas >= 80000) {
        nivel = "Nível 10";
        if (!recompensaNivel10Concedida) {
            ouro += 800;
            recompensaNivel10Concedida = true;
        }
        recompensaNivel9Concedida = false;
    } else if (totalBananas >= 60000) {
        nivel = "Nível 9";
        if (!recompensaNivel9Concedida) {
            ouro += 600;
            recompensaNivel9Concedida = true;
        }
        recompensaNivel8Concedida = false;
    } else if (totalBananas >= 50000) {
        nivel = "Nível 8";
        if (!recompensaNivel8Concedida) {
            ouro += 500;
            recompensaNivel8Concedida = true;
        }
        recompensaNivel7Concedida = false;
    } else if (totalBananas >= 40000) {
        nivel = "Nível 7";
        if (!recompensaNivel7Concedida) {
            ouro += 400;
            recompensaNivel7Concedida = true;
        }
        recompensaNivel6Concedida = false;
    } else if (totalBananas >= 30000) {
        nivel = "Nível 6";
        if (!recompensaNivel6Concedida) {
            ouro += 300;
            recompensaNivel6Concedida = true;
        }
        recompensaNivel5Concedida = false;
    } else if (totalBananas >= 20000) {
        nivel = "Nível 5";
        if (!recompensaNivel5Concedida) {
            ouro += 200;
            recompensaNivel5Concedida = true;
        }
        recompensaNivel4Concedida = false;
    } else if (totalBananas >= 15000) {
        nivel = "Nível 4";
        if (!recompensaNivel4Concedida) {
            ouro += 150;
            recompensaNivel4Concedida = true;
        }
        recompensaNivel3Concedida = false;
    } else if (totalBananas >= 10000) {
        nivel = "Nível 3";
        if (!recompensaNivel3Concedida) {
            ouro += 100;
            recompensaNivel3Concedida = true;
        }
        recompensaNivel2Concedida = false;
    } else if (totalBananas >= 7500) {
        nivel = "Nível 2";
        if (!recompensaNivel2Concedida) {
            ouro += 75;
            recompensaNivel2Concedida = true;
        }
        recompensaNivel1Concedida = false;
    } else if (totalBananas >= 5000) {
        nivel = "Nível 1";
        if (!recompensaNivel1Concedida) {
            ouro += 50;
            recompensaNivel1Concedida = true;
        }
    }
    updateDisplay();
}

function verificarNivel() {
    if (dolares <= 1) {
        alert("Você é um perdedor!");
        window.location.href = "nivel2.html";
    }
}

function mercadoBanana1() {
    if (bananas >= 20) {
        bananas -= 20;
        dolares += 22;
        updateDisplay();
    } else {
        alert("Você não tem dólares suficiente para comprar este item.");
    }
}

function mercadoBanana2() {
    if (bananas >= 100) {
        bananas -= 100;
        dolares += 122;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}
function mercadoBanana3() {

    if (bananas >= 500) {
        bananas -= 500;
        dolares += 628;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}


function mercadoBanana4() {

    if (bananas >= 2500) {
        bananas -= 2500;
        dolares += 3276;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function mercadoBanana5() {

    if (bananas >= 12500) {
        bananas -= 12500;
        dolares += 17432;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function mercadoBanana6() {

    if (bananas >= 62500) {
        bananas -= 62500;
        dolares += 102320;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function mercadoBanana7() {

    if (bananas >= 312500) {
        bananas -= 312500;
        dolares += 543963;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function mercadoBanana8() {

    if (bananasDouradas >= 1) {
        bananasDouradas -= 1;
        dolares += numeroVolatil;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}


function updateDisplay() {
    const bananasElement = document.getElementById("bananas");
    bananasElement.textContent = bananas.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const dolaresElement = document.getElementById("dolares");
    dolaresElement.textContent = dolares.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const ouroElement = document.getElementById("ouro");
    ouroElement.textContent = ouro.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const bananasPorCliqueElement = document.getElementById("bananasPorClique");
    bananasPorCliqueElement.textContent = bananasPorClique.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const dolaresPorCliqueElement = document.getElementById("dolaresPorClique");
    dolaresPorCliqueElement.textContent = dolaresPorClique.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const bananaAutomaticoElement = document.getElementById("bananaAutomatico");
    bananaAutomaticoElement.textContent = bananaAutomatico.toFixed(2);

    const dolarAutomaticoElement = document.getElementById("dolarAutomatico");
    dolarAutomaticoElement.textContent = dolarAutomatico.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const lucroElement = document.getElementById("lucro");
    const lucro = bananaAutomatico - dolarAutomatico;
    lucroElement.textContent = lucro.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const lucroPorCliqueElement = document.getElementById("lucroPorClique");
    const lucroPorClique = bananasPorClique - dolaresPorClique;
    lucroPorCliqueElement.textContent = lucroPorClique.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const bananasDouradasElement = document.getElementById("bananasDouradas");
    bananasDouradasElement.textContent = bananasDouradas.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const numeroVolatilElement = document.getElementById("numeroVolatil");
      numeroVolatilElement.innerText = numeroVolatil.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

document.getElementById("nivel").textContent = nivel;
}

function buyItem(cost, adicionado) {
    if (dolares >= cost) {
        dolares -= cost;
        bananasPorClique *= adicionado;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function buyItem1(cost, adicionado) {
    if (dolares >= cost) {
        dolares -= cost;
        bananasPorClique *= adicionado;        
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}


function buyItem2(cost, adicionado) {
    if (dolares >= cost) {
        dolares -= cost;
        dolaresPorClique *= adicionado;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function buyItem3(cost, adicionado) {
    if (dolares >= cost) {
        dolares -= cost;
        bananaAutomatico *= adicionado;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function buyItem4(cost, adicionado) {
    if (dolares >= cost) {
        dolares -= cost;
        dolarAutomatico *= adicionado;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function buyItem5(cost, adicionado) {
    if (ouro >= cost) {
        ouro -= cost;
        bananasDouradas += adicionado;
        updateDisplay();
    } else {
        alert("Você não tem saldo suficiente para comprar este item.");
    }
}

function listaMercadoBanana() {
    var listaMercadoBanana = document.getElementById("listaMercadoBanana");
    if (listaMercadoBanana.style.display === "none") {
        listaMercadoBanana.style.display = "block";
    } else {
        listaMercadoBanana.style.display = "none";
    }
}

function listaUpgradesBanana() {
    var listaUpgradesBanana = document.getElementById("listaUpgradesBanana");
    if (listaUpgradesBanana.style.display === "none") {
        listaUpgradesBanana.style.display = "block";
    } else {
        listaUpgradesBanana.style.display = "none";
    }
}

function listaMercadoOuro() {
    var listaMercadoOuro = document.getElementById("listaMercadoOuro");
    if (listaMercadoOuro.style.display === "none") {
        listaMercadoOuro.style.display = "block";
    } else {
        listaMercadoOuro.style.display = "none";
    }
}

function AumentoAutomaticoBanana() {
    setInterval(function () {
        bananas += bananaAutomatico;
        dolares -= dolarAutomatico;
        updateDisplay();
        verificarNivel();
    }, 10000);
}

AumentoAutomaticoBanana();

    function atualizarNumero() {
      const variacao = Math.random() - 0.5;
      numeroVolatil += variacao;
      updateDisplay();
    }

    setInterval(atualizarNumero, 1000);