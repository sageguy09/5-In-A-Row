/* 
 * import mongoose connection
 */

const mongoose = require('./connection.js')
const ObjectId = mongoose.Types.ObjectId
/* 
 * model schema 
 */


const cardSchema = new mongoose.Schema({
  card_0: {
    cardValue: 0,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },
  card_1: {
    cardValue: 1,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_2: {
    cardValue: 2,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_3: {
    cardValue: 3,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_4: {
    cardValue: 4,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_5: {
    cardValue: 5,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_6: {
    cardValue: 6,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_7: {
    cardValue: 7,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_8: {
    cardValue: 8,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_9: {
    cardValue: 9,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_10: {
    cardValue: 10,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_11: {
    cardValue: 11,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_12: {
    cardValue: 12,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_13: {
    cardValue: 14,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_15: {
    cardValue: 15,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_16: {
    cardValue: 16,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_17: {
    cardValue: 17,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_18: {
    cardValue: 18,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_19: {
    cardValue: 19,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_20: {
    cardValue: 20,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_21: {
    cardValue: 21,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_22: {
    cardValue: 22,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_23: {
    cardValue: 23,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_24: {
    cardValue: 24,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_25: {
    cardValue: 25,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_26: {
    cardValue: 27,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_28: {
    cardValue: 28,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_29: {
    cardValue: 29,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_30: {
    cardValue: 30,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_31: {
    cardValue: 31,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_32: {
    cardValue: 32,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_33: {
    cardValue: 33,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_34: {
    cardValue: 35,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_36: {
    cardValue: 36,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_37: {
    cardValue: 37,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_38: {
    cardValue: 38,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_39: {
    cardValue: 39,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_40: {
    cardValue: 40,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_41: {
    cardValue: 41,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_42: {
    cardValue: 42,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_43: {
    cardValue: 43,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_44: {
    cardValue: 44,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_45: {
    cardValue: 45,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_46: {
    cardValue: 46,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_47: {
    cardValue: 47,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_48: {
    cardValue: 48,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_49: {
    cardValue: 49,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_50: {
    cardValue: 50,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_51: {
    cardValue: 51,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_52: {
    cardValue: 52,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_53: {
    cardValue: 53,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_54: {
    cardValue: 54,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_55: {
    cardValue: 55,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_56: {
    cardValue: 56,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_57: {
    cardValue: 57,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_58: {
    cardValue: 58,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_59: {
    cardValue: 59,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_60: {
    cardValue: 60,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_61: {
    cardValue: 61,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_62: {
    cardValue: 62,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_63: {
    cardValue: 63,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_64: {
    cardValue: 64,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_65: {
    cardValue: 66,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_67: {
    cardValue: 67,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_68: {
    cardValue: 68,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_69: {
    cardValue: 69,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_70: {
    cardValue: 70,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_71: {
    cardValue: 71,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_72: {
    cardValue: 72,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_73: {
    cardValue: 73,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_74: {
    cardValue: 74,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_75: {
    cardValue: 75,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_76: {
    cardValue: 76,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_77: {
    cardValue: 77,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_78: {
    cardValue: 78,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_79: {
    cardValue: 79,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_80: {
    cardValue: 80,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_81: {
    cardValue: 81,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_82: {
    cardValue: 82,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_83: {
    cardValue: 83,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_84: {
    cardValue: 84,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_85: {
    cardValue: 85,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_86: {
    cardValue: 86,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_87: {
    cardValue: 87,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_88: {
    cardValue: 88,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_89: {
    cardValue: 89,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_89: {
    cardValue: 89,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_90: {
    cardValue: 90,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_91: {
    cardValue: 91,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_92: {
    cardValue: 92,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_93: {
    cardValue: 93,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_94: {
    cardValue: 94,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_95: {
    cardValue: 95,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_96: {
    cardValue: 96,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_97: {
    cardValue: 97,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_98: {
    cardValue: 98,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_99: {
    cardValue: 99,
    cardImg: "../public/ace_of_spades.png",
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },
  created_at: {
    type: Date, default: Date.now
  },
  gameId: {
    type: ObjectId,
  },
  deckId: {
    type: ObjectId,
  }
})


/*
 * collection APIs
 */
const cardCollection = mongoose.model('Card', cardSchema)


/* Step 4
 * model functions
 */
//test function
function cardsGetHelloWorldString() {
  return 'hello world'
}

//////////Cards Model Functions//////////

const getSingleCardCollection = (cardsId) => {
   return cardCollection.findById(cardsId);
} 

const updateCardAssignment = (cardId, playerId) => {
  return cardCollection.findByIdAndUpdate(cardId, playerId, {new:true});
}
const addCardCollection = (gameDeckIds) => {
   return cardCollection.insertMany(gameDeckIds);
}

const deleteCardCollection = (cardsId) => {
   return cardCollection.findByIdAndDelete(cardsId);
}


/* Step 5
 * exportfunctions
 */
module.exports = {
  addCardCollection,
  cardsGetHelloWorldString,
  deleteCardCollection,
  getSingleCardCollection,
  updateCardAssignment
}
