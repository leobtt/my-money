const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.soma = functions.database
  .ref('/movimentacoes/{dia}')
  .onWrite(async (change, context) => {
    // referência da tabela meses
    const mesesRef = admin.database().ref('/meses/' + context.params.dia)
    // vai executar depois que a referência acontecer
    const movimentacoesRef = change.after.ref
    // Saber quais dados estão sendo salvos
    const movimentacoesSS = await movimentacoesRef.once('value')
    // Para extrair os dados que vem como snapshot - converter
    const movimentacoes = movimentacoesSS.val()

    let entradas = (0).toFixed(2)
    let saidas = (0).toFixed(2)
    let saldo = (0).toFixed(2)

    Object.keys(movimentacoes).forEach((m) => {
      if (movimentacoes[m].valor > 0 && movimentacoes[m].receita === true) {
        saldo += movimentacoes[m].valor
        entradas += movimentacoes[m].valor
      } else {
        saidas -= movimentacoes[m].valor
        saldo -= movimentacoes[m].valor
      }
    })

    // modificar os meses
    return mesesRef.transaction((currentValue) => {
      if (currentValue === null) {
        return {
          entradas,
          saidas,
          /* previsao_entrada: 0,
          previsao_saida: 0, */
          saldo,
        }
      }
      return {
        ...currentValue,
        entradas: entradas.toFixed(2),
        saidas: saidas.toFixed(2),
        saldo: saldo.toFixed(2),
      }
    })
  })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
