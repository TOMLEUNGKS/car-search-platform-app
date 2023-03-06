"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[9565],{9565:function(e,n,t){t.r(n),t.d(n,{FirebaseAuthenticationWeb:function(){return i}});var s=t(9895),r=t(8867);class i extends s.Uw{constructor(){super();const e=(0,r.v0)();e.onAuthStateChanged((e=>this.handleAuthStateChange(e)))}async applyActionCode(e){const n=(0,r.v0)();return(0,r.iA)(n,e.oobCode)}async createUserWithEmailAndPassword(e){const n=(0,r.v0)(),t=await(0,r.Xb)(n,e.email,e.password);return this.createSignInResult(t,null)}async confirmPasswordReset(e){const n=(0,r.v0)();return(0,r.LG)(n,e.oobCode,e.newPassword)}async getCurrentUser(){const e=(0,r.v0)(),n=this.createUserResult(e.currentUser),t={user:n};return t}async getIdToken(e){const n=(0,r.v0)();if(!n.currentUser)throw new Error(i.ERROR_NO_USER_SIGNED_IN);const t=await n.currentUser.getIdToken(null===e||void 0===e?void 0:e.forceRefresh),s={token:t||""};return s}async sendEmailVerification(){const e=(0,r.v0)(),n=e.currentUser;if(!n)throw new Error(i.ERROR_NO_USER_SIGNED_IN);return(0,r.w$)(n)}async sendPasswordResetEmail(e){const n=(0,r.v0)();return(0,r.LS)(n,e.email)}async setLanguageCode(e){const n=(0,r.v0)();n.languageCode=e.languageCode}async signInWithApple(e){const n=new r.O4("apple.com");this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.O4.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithCustomToken(e){const n=(0,r.v0)(),t=await(0,r._p)(n,e.token);return this.createSignInResult(t,null)}async signInWithEmailAndPassword(e){const n=(0,r.v0)(),t=await(0,r.e5)(n,e.email,e.password);return this.createSignInResult(t,null)}async signInWithFacebook(e){const n=new r._O;this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r._O.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithGithub(e){const n=new r.O4("github.com");this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.O4.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithGoogle(e){const n=new r.hJ;this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.hJ.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithMicrosoft(e){const n=new r.O4("microsoft.com");this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.O4.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithPhoneNumber(e){throw new Error("Not implemented on web.")}async signInWithPlayGames(){throw new Error("Not available on web.")}async signInWithTwitter(e){const n=new r.O4("twitter.com");this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.O4.credentialFromResult(s);return this.createSignInResult(s,i)}async signInWithYahoo(e){const n=new r.O4("yahoo.com");this.applySignInOptions(e||{},n);const t=(0,r.v0)(),s=await(0,r.rh)(t,n),i=r.O4.credentialFromResult(s);return this.createSignInResult(s,i)}async signOut(){const e=(0,r.v0)();await e.signOut()}async updateEmail(e){const n=(0,r.v0)(),t=n.currentUser;if(!t)throw new Error(i.ERROR_NO_USER_SIGNED_IN);return(0,r.s)(t,e.newEmail)}async updatePassword(e){const n=(0,r.v0)(),t=n.currentUser;if(!t)throw new Error(i.ERROR_NO_USER_SIGNED_IN);return(0,r.gQ)(t,e.newPassword)}async useAppLanguage(){const e=(0,r.v0)();e.useDeviceLanguage()}async useEmulator(e){const n=(0,r.v0)(),t=e.port||9099;(0,r.S$)(n,`${e.host}:${t}`)}handleAuthStateChange(e){const n=this.createUserResult(e),t={user:n};this.notifyListeners("authStateChange",t)}applySignInOptions(e,n){if(e.customParameters){const t={};e.customParameters.map((e=>{t[e.key]=e.value})),n.setCustomParameters(t)}if(e.scopes)for(const t of e.scopes)n.addScope(t)}createSignInResult(e,n){const t=this.createUserResult(e.user),s=this.createCredentialResult(n),r=this.createAdditionalUserInfoResult(e),i={user:t,credential:s,additionalUserInfo:r};return i}createCredentialResult(e){if(!e)return null;const n={providerId:e.providerId};return e instanceof r.jh&&(n.accessToken=e.accessToken,n.idToken=e.idToken,n.secret=e.secret),n}createUserResult(e){if(!e)return null;const n={displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerId:e.providerId,tenantId:e.tenantId,uid:e.uid};return n}createAdditionalUserInfoResult(e){const n=(0,r.gK)(e);if(!n)return null;const{isNewUser:t,profile:s,providerId:i,username:a}=n,o={isNewUser:t};return null!==i&&(o.providerId=i),null!==s&&(o.profile=s),null!==a&&void 0!==a&&(o.username=a),o}}i.ERROR_NO_USER_SIGNED_IN="No user is signed in."}}]);
//# sourceMappingURL=9565.72b2a778.js.map