

function frasesAleatorias(index){
    const frases = [
        `Quem tem luz própria jamais ficará na escuridão. 🌟`,
        `Você atingirá o sucesso quando apresentar com orgulho as cicatrizes que adquiriu ao longo da sua jornada.`,
        `Quanto mais fortes forem suas provações, maiores serão suas vitórias. 😉`,
        `Trabalhar duro te levará para cima, aproveitar o caminho te levará mais longe.`,
        `Não espere pelo momento perfeito. Faça de cada momento a oportunidade perfeita.`,
        `Vencedores não são pessoas que nunca falham, são pessoas que nunca desistem.🦸‍♂️`,
        `Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.`,
        `Viva a história que um dia você gostaria de contar para os seus netos.`,
        `Cada falha deixa um ensino, cada ensino deixa uma experiência e cada experiência deixa uma marca. ✨`,
        `Procurai suportar com ânimo tudo aquilo que precisa ser feito.`,
        `Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu.`,
    ]
    
    if (index === undefined){
        return frases[Math.floor(Math.random() * frases.length)]
    }

    return frases[index]
}



module.exports = frasesAleatorias;