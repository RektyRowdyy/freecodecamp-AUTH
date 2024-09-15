import passport from 'passport';
import { Strategy } from 'passport-google-oauth20'
import { GoogleUser } from '../models/googleUser.model.mjs';

passport.serializeUser((user, done) => {   
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null,user);
});

export default passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `https://freecodecamp-api-blond.vercel.app/api/googleCallback`,
            scope: ["profile", "email"]
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                //see if users exists ( if not create a new user )
                const findUser = await GoogleUser.findOne({ googleId: profile.id });
                if (!findUser) {
                    const saveUser = new GoogleUser({
                        googleId: profile.id,
                        email: profile.emails[0].value
                    }).save();
                    return done(null, saveUser);
                }
                return done(null, findUser);

            } catch (error) {
                return done(error, null);
            }
        }
    )
)
