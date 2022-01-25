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

    let entradas = 0
    let saidas = 0

    Object.keys(movimentacoes).forEach((m) => {
      if (movimentacoes[m].valor > 0) {
        entradas += movimentacoes[m].valor
      } else {
        saidas += movimentacoes[m].valor
      }
    })

    // modificar os meses
    return mesesRef.transaction((currentValue) => {
      if (currentValue === null) {
        return {
          entradas,
          saidas,
          previsao_entrada: 0,
          previsao_saida: 0,
        }
      }
      return {
        ...currentValue,
        entradas,
        saidas,
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
