const { Snowflake, Guild, Channel, User } = require("discord.js")

/**
 * the default applications options
 * @typedef defaultApplicationsOptions
 * 
 * @property {Snowflake} youtube The id for youtube
 * @property {Snowflake} youtubedev The id for youtubedev
 * @property {Snowflake} poker The id for poker
 * @property {Snowflake} betrayal The id for betrayal
 * @property {Snowflake} fishing The id for fishing
 * @property {Snowflake} chess The id for chess
 * @property {Snowflake} chessdev The id for chessdev
 * @property {Snowflake} lettertile The id for lettertile
 * @property {Snowflake} wordsnack The id for wordsnack
 * @property {Snowflake} doodlecrew The id for doodlecrew
 * @property {Snowflake} spellcast The id for spellcast
 * @property {Snowflake} checkers The id for checkers
 * @property {Snowflake} puttparty The id for puttparty
 * @property {Snowflake} sketchheads The id for sketchheads
 * @property {Snowflake} ocho The id for ocho
 */

exports.defaultApplicationsOptions = {
    youtube: '880218394199220334',
    youtubedev: '880218832743055411',
    poker: '755827207812677713',
    betrayal: '773336526917861400',
    fishing: '814288819477020702',
    chess: '832012774040141894',
    chessdev: '832012586023256104',
    lettertile: '879863686565621790',
    wordsnack: '879863976006127627',
    doodlecrew: '878067389634314250',
    awkword: '879863881349087252',
    spellcast: '852509694341283871',
    checkers: '832013003968348200',
    puttparty: '763133495793942528',
    sketchheads: '902271654783242291',
    ocho: '832025144389533716',
}

/**
 * the default options
 * 
 * @typedef defaultActivityOptions
 * 
 * @property {defaultApplicationsOptions} activity Tha activity you want to start
 * @property {Number} [duration] The length of time the invitation will remain valid
 * @property {Boolean} [neverExpire] If the ivitation will never expire
 * @property {Number} [maxUses] The max utilisation of the invitation
 */
exports.defaultActivityOptions = {
    duration: 86400,
    neverExpire: false,
    maxUses: 0
}

// TODO: search the type returned by `responses.target_application.icon` for icon property
/**
 * The activity data
 * 
 * @typedef activityData
 * 
 * @property {Snowflake} id
 * @property {String} name
 * @property {?} icon 
 * @property {String} description
 */

/**
 * The return data
 * 
 * @typedef returnData
 * 
 * @property {String} code
 * @property {Number} expireAt 
 * @property {activityData} activity
 * @property {Guild} guild
 * @property {Channel} Channel
 * @property {User} inviter
 */