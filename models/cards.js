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
    cardName: {type: String, default: "card_0"},
    cardValue: {type: Number, default: 0},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },
  card_1: {
    cardName: {type: String, default: "card_1"},
    cardValue: {type: Number, default: 1},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_2: {
    cardName: {type: String, default: "card_2"},
    cardValue: {type: Number, default: 2},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_3: {
    cardName: {type: String, default: "card_3"},
    cardValue: {type: Number, default: 3},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_4: {
    cardName: {type: String, default: "card_4"},
    cardValue: {type: Number, default: 4},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_5: {
    cardName: {type: String, default: "card_5"},
    cardValue: {type: Number, default: 5},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_6: {
    cardName: {type: String, default: "card_6"},
    cardValue: {type: Number, default: 6},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_7: {
    cardName: {type: String, default: "card_7"},
    cardValue: {type: Number, default: 7},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_8: {
    cardName: {type: String, default: "card_8"},
    cardValue: {type: Number, default: 8},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_9: {
    cardName: {type: String, default: "card_9"},
    cardValue: {type: Number, default: 9},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_10: {
    cardName: {type: String, default: "card_10"},
    cardValue: {type: Number, default: 10},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_11: {
    cardName: {type: String, default: "card_11"},
    cardValue: {type: Number, default: 11},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_12: {
    cardName: {type: String, default: "card_12"},
    cardValue: {type: Number, default: 12},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_13: {
    cardName: {type: String, default: "card_13"},
    cardValue: {type: Number, default: 13},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_14: {
    cardName: {type: String, default: "card_14"},
    cardValue: {type: Number, default: 14},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_15: {
    cardName: {type: String, default: "card_15"},
    cardValue: {type: Number, default: 15},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_16: {
    cardName: {type: String, default: "card_16"},
    cardValue: {type: Number, default: 16},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_17: {
    cardName: {type: String, default: "card_17"},
    cardValue: {type: Number, default: 17},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_18: {
    cardName: {type: String, default: "card_18"},
    cardValue: {type: Number, default: 18},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_19: {
    cardName: {type: String, default: "card_19"},
    cardValue: {type: Number, default: 19},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_20: {
    cardName: {type: String, default: "card_20"},
    cardValue: {type: Number, default: 20},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_21: {
    cardName: {type: String, default: "card_21"},
    cardValue: {type: Number, default: 21},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_22: {
    cardName: {type: String, default: "card_22"},
    cardValue: {type: Number, default: 22},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_23: {
    cardName: {type: String, default: "card_23"},
    cardValue: {type: Number, default: 23},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_24: {
    cardName: {type: String, default: "card_24"},
    cardValue: {type: Number, default: 24},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_25: {
    cardName: {type: String, default: "card_25"},
    cardValue: {type: Number, default: 25},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_26: {
    cardName: {type: String, default: "card_26"},
    cardValue: {type: Number, default: 26},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_27: {
    cardName: {type: String, default: "card_27"},
    cardValue: {type: Number, default: 27},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_28: {
    cardName: {type: String, default: "card_28"},
    cardValue: {type: Number, default: 28},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_29: {
    cardName: {type: String, default: "card_29"},
    cardValue: {type: Number, default: 29},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_30: {
    cardName: {type: String, default: "card_30"},
    cardValue: {type: Number, default: 30},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_31: {
    cardName: {type: String, default: "card_31"},
    cardValue: {type: Number, default: 31},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_32: {
    cardName: {type: String, default: "card_32"},
    cardValue: {type: Number, default: 32},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_33: {
    cardName: {type: String, default: "card_33"},
    cardValue: {type: Number, default: 33},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_34: {
    cardName: {type: String, default: "card_34"},
    cardValue: {type: Number, default: 34},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_35: {
    cardName: {type: String, default: "card_35"},
    cardValue: {type: Number, default: 35},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_36: {
    cardName: {type: String, default: "card_36"},
    cardValue: {type: Number, default: 36},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_37: {
    cardName: {type: String, default: "card_37"},
    cardValue: {type: Number, default: 37},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_38: {
    cardName: {type: String, default: "card_38"},
    cardValue: {type: Number, default: 38},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_39: {
    cardName: {type: String, default: "card_39"},
    cardValue: {type: Number, default: 39},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_40: {
    cardName: {type: String, default: "card_40"},
    cardValue: {type: Number, default: 40},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_41: {
    cardName: {type: String, default: "card_41"},
    cardValue: {type: Number, default: 41},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_42: {
    cardName: {type: String, default: "card_42"},
    cardValue: {type: Number, default: 42},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_43: {
    cardName: {type: String, default: "card_43"},
    cardValue: {type: Number, default: 43},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_44: {
    cardName: {type: String, default: "card_44"},
    cardValue: {type: Number, default:44},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_45: {
    cardName: {type: String, default: "card_45"},
    cardValue: {type: Number, default: 45},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_46: {
    cardName: {type: String, default: "card_46"},
    cardValue: {type: Number, default: 46},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_47: {
    cardName: {type: String, default: "card_47"},
    cardValue: {type: Number, default: 47},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_48: {
    cardName: {type: String, default: "card_48"},
    cardValue: {type: Number, default: 48},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_49: {
    cardName: {type: String, default: "card_49"},
    cardValue: {type: Number, default: 49},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_50: {
    cardName: {type: String, default: "card_50"},
    cardValue: {type: Number, default: 50},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_51: {
    cardName: {type: String, default: "card_51"},
    cardValue: {type: Number, default: 51},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_52: {
    cardName: {type: String, default: "card_52"},
    cardValue: {type: Number, default: 52},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_53: {
    cardName: {type: String, default: "card53"},
    cardValue: {type: Number, default: 53},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_54: {
    cardName: {type: String, default: "card_54"},
    cardValue: {type: Number, default: 54},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_55: {
    cardName: {type: String, default: "card_55"},
    cardValue: {type: Number, default: 55},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_56: {
    cardName: {type: String, default: "card_56"},
    cardValue: {type: Number, default: 56},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_57: {
    cardName: {type: String, default: "card_57"},
    cardValue: {type: Number, default: 57},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_58: {
    cardName: {type: String, default: "card_58"},
    cardValue: {type: Number, default: 58},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_59: {
    cardName: {type: String, default: "card_59"},
    cardValue: {type: Number, default: 59},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_60: {
    cardName: {type: String, default: "card_60"},
    cardValue: {type: Number, default: 60},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_61: {
    cardName: {type: String, default: "card_61"},
    cardValue: {type: Number, default: 61},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_62: {
    cardName: {type: String, default: "card_62"},
    cardValue: {type: Number, default: 62},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_63: {
    cardName: {type: String, default: "card_63"},
    cardValue: {type: Number, default: 63},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_64: {
    cardName: {type: String, default: "card_64"},
    cardValue: {type: Number, default: 64},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_65: {
    cardName: {type: String, default: "card_65"},
    cardValue: {type: Number, default: 65},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
    },
    card_66: {
      cardName: {type: String, default: "card_66"},
      cardValue: {type: Number, default: 66},
      cardImg: { type: String, default: "../public/ace_of_spades.png"},
      assignedTo: {
        type: ObjectId,
        default: undefined
      }
  },card_67: {
    cardName: {type: String, default: "card_67"},
    cardValue: {type: Number, default: 67},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_68: {
    cardName: {type: String, default: "card_68"},
    cardValue: {type: Number, default: 68},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_69: {
    cardName: {type: String, default: "card_69"},
    cardValue: {type: Number, default: 69},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_70: {
    cardName: {type: String, default: "card_70"},
    cardValue: {type: Number, default: 70},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_71: {
    cardName: {type: String, default: "card_71"},
    cardValue: {type: Number, default: 71},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_72: {
    cardName: {type: String, default: "card_72"},
    cardValue: {type: Number, default: 72},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_73: {
    cardName: {type: String, default: "card_73"},
    cardValue: {type: Number, default: 73},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_74: {
    cardName: {type: String, default: "card_74"},
    cardValue: {type: Number, default: 74},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_75: {
    cardName: {type: String, default: "card_75"},
    cardValue: {type: Number, default: 75},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_76: {
    cardName: {type: String, default: "card_76"},
    cardValue: {type: Number, default: 76},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_77: {
    cardName: {type: String, default: "card_77"},
    cardValue: {type: Number, default: 77},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_78: {
    cardName: {type: String, default: "card_78"},
    cardValue: {type: Number, default: 78},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_79: {
    cardName: {type: String, default: "card_79"},
    cardValue: {type: Number, default: 79},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_80: {
    cardName: {type: String, default: "card_80"},
    cardValue: {type: Number, default: 80},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_81: {
    cardName: {type: String, default: "card_81"},
    cardValue: {type: Number, default: 81},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_82: {
    cardName: {type: String, default: "card_82"},
    cardValue: {type: Number, default: 82},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_83: {
    cardName: {type: String, default: "card_83"},
    cardValue: {type: Number, default: 83},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_84: {
    cardName: {type: String, default: "card_84"},
    cardValue: {type: Number, default: 84},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_85: {
    cardName: {type: String, default: "card_85"},
    cardValue: {type: Number, default: 85},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_86: {
    cardName: {type: String, default: "card_86"},
    cardValue: {type: Number, default: 86},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_87: {
    cardName: {type: String, default: "card_87"},
    cardValue: {type: Number, default: 87},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_88: {
    cardName: {type: String, default: "card_88"},
    cardValue: {type: Number, default: 88},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_89: {
    cardName: {type: String, default: "card_89"},
    cardValue: {type: Number, default: 89},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_89: {
    cardName: {type: String, default: "card_89"},
    cardValue: {type: Number, default: 89},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_90: {
    cardName: {type: String, default: "card_90"},
    cardValue: {type: Number, default: 90},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_91: {
    cardName: {type: String, default: "card_91"},
    cardValue: {type: Number, default: 91},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_92: {
    cardName: {type: String, default: "card_92"},
    cardValue: {type: Number, default: 92},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_93: {
    cardName: {type: String, default: "card_93"},
    cardValue: {type: Number, default: 93},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_94: {
    cardName: {type: String, default: "card_94"},
    cardValue: {type: Number, default: 94},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_95: {
    cardName: {type: String, default: "card_95"},
    cardValue: {type: Number, default: 95},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_96: {
    cardName: {type: String, default: "card_96"},
    cardValue: {type: Number, default: 96},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_97: {
    cardName: {type: String, default: "card_97"},
    cardValue: {type: Number, default: 97},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_98: {
    cardName: {type: String, default: "card_98"},
    cardValue: {type: Number, default: 98},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: undefined
    }
  },card_99: {
    cardName: {type: String, default: "card_99"},
    cardValue: {type: Number, default: 99},
    cardImg: { type: String, default: "../public/ace_of_spades.png"},
    assignedTo: {
      type: ObjectId,
      default: deckId,
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
    ref: (deckId)
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

const createCardCollection = (gameId, deckId) => {
  return cardCollection.create({
    gameId: (gameId),
    deckId: (deckId)
  })
}
/*
const addDeckToAssignedTo = (deckId) => {
  cardCollection.updateMany({
    /card$/ : 
  })
}*/

const deleteCardCollection = (cardsId) => {
   return cardCollection.findByIdAndDelete(cardsId);
}


/* Step 5
 * exportfunctions
 */
module.exports = {
  addCardCollection,
  cardsGetHelloWorldString,
  createCardCollection,
  deleteCardCollection,
  getSingleCardCollection,
  updateCardAssignment
}
