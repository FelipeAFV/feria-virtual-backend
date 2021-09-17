"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var typeorm_1 = require("typeorm");
var User_1 = require("../model/entity/User");
/**
 * Extraer token de una cookie
 */
var stractMethod = function (req) {
    var token = null;
    if (req && req.cookies['jwt']) {
        token = req.cookies['jwt'];
    }
    console.log('Token', token);
    return token;
};
var options = {
    jwtFromRequest: stractMethod,
    secretOrKey: 'SECRET'
};
/**
 * Passport se encarga de revisar el jwt
 */
var jwtStrategy = new passport_jwt_1.Strategy(options, function (payload, done) {
    var userRepo = (0, typeorm_1.getRepository)(User_1.User);
    console.log(payload, ' payload');
    return userRepo.findOne(payload.userId)
        .then(function (user) {
        if (user) {
            return done(null, user);
        }
        else {
            return done('null', false);
        }
    })
        .catch(function (err) {
        return done(err, null);
    });
});
var configure = function (passport) {
    passport.use(jwtStrategy);
};
exports.default = configure;
// passport.use(jwtStrategy);
