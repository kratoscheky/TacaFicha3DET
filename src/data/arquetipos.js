import abissal from '../images/arquetipos/abissal.png'
import anao from '../images/arquetipos/anao.png'
import anfibio from '../images/arquetipos/anfibio.png'
import celestial from '../images/arquetipos/celestial.png'
import ciborgue from '../images/arquetipos/ciborgue.png'
import dahllan from '../images/arquetipos/dahllan.png'
import fada from '../images/arquetipos/fada.png'
import fantasma from '../images/arquetipos/fantasma.png'
import humano from '../images/arquetipos/humano.png'
import hynne from '../images/arquetipos/hynne.png'
import kemono from '../images/arquetipos/kemono.png'
import ogro from '../images/arquetipos/ogro.png'
import aberrante from '../images/arquetipos/aberrante.png'
import qareen from '../images/arquetipos/Qareen.png'
import elfo from '../images/arquetipos/elfo.png'
import vampiro from '../images/arquetipos/vampiro.png'
import sauroide from '../images/arquetipos/sauroide.png'
import osteon from '../images/arquetipos/osteon.png'
import minotauro from '../images/arquetipos/minotauro.png'
import medusa from '../images/arquetipos/medusa.png'
import kallyanach from '../images/arquetipos/kallyanach.png'
import goblin from '../images/arquetipos/goblin.png'
import constructo from '../images/arquetipos/construto.png'
import centauro from '../images/arquetipos/centauro.png'
import alien from '../images/arquetipos/alien.png'

export const arquetipos = [
    {
        Nome: 'Aberrante',
        Descricao: '',
        Imagem: aberrante,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Deformidade" }, { Id: crypto.randomUUID(), Nome: "Teratismo" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Monstruoso" }],
            arquetipo: 'Aberrante',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Abissal',
        Descricao: '',
        Imagem: abissal,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Ágil" }, { Id: crypto.randomUUID(), Nome: "Praga" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Infame" }],
            arquetipo: 'Abissal',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Alien',
        Descricao: '',
        Imagem: alien,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Talento" }, { Id: crypto.randomUUID(), Nome: "Xenobiologia" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Inculto" }],
            arquetipo: 'Alien',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Anão',
        Descricao: '',
        Imagem: anao,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Abascanto" }, { Id: crypto.randomUUID(), Nome: "A Ferro e Fogo" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Lento" }],
            arquetipo: 'Anão',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Anfibio',
        Descricao: '',
        Imagem: anfibio,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Imune (Anfíbio)" }, { Id: crypto.randomUUID(), Nome: "Vigoroso" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Ambiente" }],
            arquetipo: 'Anfibio',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Celestial',
        Descricao: '',
        Imagem: celestial,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Carismático"}, { Id: crypto.randomUUID(), Nome: "Inspirar" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Código" }],
            arquetipo: 'Celestial',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Centauro',
        Descricao: '',
        Imagem: centauro,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Corpo Táurico" }, { Id: crypto.randomUUID(), Nome: "Vigoroso" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Diferente" }],
            arquetipo: 'Centauro',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Ciborgue',
        Descricao: '',
        Imagem: ciborgue,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Construto Vivo" }, { Id: crypto.randomUUID(), Nome: "Imune" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Diretriz" }],
            arquetipo: 'Ciborgue',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Construto',
        Descricao: '',
        Imagem: constructo,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Imune" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Bateria" }, { Id: crypto.randomUUID(), Nome: "Sem Vida" }],
            arquetipo: 'Construto',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Dahllan',
        Descricao: '',
        Imagem: dahllan,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Benção da Natureza" },{ Id: crypto.randomUUID(), Nome: "Empatia Selvagem" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Código" }],
            arquetipo: 'Dahllan',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Elfo',
        Descricao: '',
        Imagem: elfo,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Carismático" }, { Id: crypto.randomUUID(), Nome: "Natureza Mística" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Frágil" }],
            arquetipo: 'Elfo',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Fada',
        Descricao: '',
        Imagem: fada,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Magia das Fadas" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Infame" }, { Id: crypto.randomUUID(), Nome: "Delicada" }],
            arquetipo: 'Fada',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Fantasma',
        Descricao: '',
        Imagem: fantasma,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Espírito" }, { Id: crypto.randomUUID(), Nome: "Paralisia" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Devoto" }],
            arquetipo: 'Fantasma',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Goblin',
        Descricao: '',
        Imagem: goblin,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Espertalhão" }, { Id: crypto.randomUUID(), Nome: "Subterrâneo" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Diferente" }],
            arquetipo: 'Goblin',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Humano',
        Descricao: '',
        Imagem: humano,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Mais Além" }],
            desvantagens: [],
            arquetipo: 'Humano',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Hynne',
        Descricao: '',
        Imagem: hynne,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Atirador" }, { Id: crypto.randomUUID(), Nome: "Encantador" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Diferente" }],
            arquetipo: 'Hynne',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Kallyanach',
        Descricao: '',
        Imagem: kallyanach,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Baforada" }, { Id: crypto.randomUUID(), Nome: "Poder Dracônico" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Código dos Dragões" }],
            arquetipo: 'Kallyanach',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Kemono',
        Descricao: '',
        Imagem: kemono,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Talento" }, { Id: crypto.randomUUID(), Nome: "Percepção Apurada" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Cacoete" }],
            arquetipo: 'Kemono',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Medusa',
        Descricao: '',
        Imagem: medusa,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Carismático" }, { Id: crypto.randomUUID(), Nome: "Olhar Atordoante" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Fracote" }],
            arquetipo: 'Medusa',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Minotauro',
        Descricao: '',
        Imagem: minotauro,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Atlético" }, { Id: crypto.randomUUID(), Nome: "Sentido Labiríntico" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Insano (Fobia)" }],
            arquetipo: 'Minotauro',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Ogro',
        Descricao: '',
        Imagem: ogro,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Destruidor" }, { Id: crypto.randomUUID(), Nome: "Intimidador" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Diferente" }],
            arquetipo: 'Ogro',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Osteon',
        Descricao: '',
        Imagem: osteon,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: " Imune (Abiótico, Doenças, Resiliente)" }, { Id: crypto.randomUUID(), Nome: "Memória Póstuma" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Sem Vida" }],
            arquetipo: 'Osteon',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Qareen',
        Descricao: '',
        Imagem: qareen,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Carismático" }, { Id: crypto.randomUUID(), Nome: "Desejos" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Código da Gratidão" }],
            arquetipo: 'Qareen',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Sauroide',
        Descricao: '',
        Imagem: sauroide,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Cascudo" }, { Id: crypto.randomUUID(), Nome: "Camuflagem" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Fraqueza (Frio)" }],
            arquetipo: 'Sauroide',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    },
    {
        Nome: 'Vampiro',
        Descricao: '',
        Imagem: vampiro,
        slot: {
            nome: '',
            detalhes: '',
            pericias: [],
            vantagens: [{ Id: crypto.randomUUID(), Nome: "Talento" }, { Id: crypto.randomUUID(), Nome: "Imortal" }],
            desvantagens: [{ Id: crypto.randomUUID(), Nome: "Fraqueza (luz do dia)" }],
            arquetipo: 'Vampiro',
            pontosTotais: 0,
            atributos: {
              poder: 0,
              habilidade: 0,
              resistencia: 0,
            },
            extras: {
              pontosDeAcao: 0,
              pontosDeMana: 0,
              pontosDeVida: 0,
            },
            imageUrl: null,
        }
    }
]