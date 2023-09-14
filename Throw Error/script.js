
const register = (user) => {
  if (!user.name || !user.email) {
    // throw error here
    // return new Error("User must have both name and email!"); // return သုံးပါက error အား obj ပုံစံဖြင့် ထုတ်၍ Global codes များကို ဆက် run မည်။  
    throw new Error("User must have both name and email!");     // throw သည် error type change ပေးပြီး ကျန် code များကို ဆက်မrun တော့ပေ။ 
  };
  return "Registered success.";
}

const user = {
  name: "Kyaw Thu",
  email : "user01@gmail.com"
};

try {
  const status = register(user);
  console.log(status);
} catch (error) {
  console.log("Inside catch : ", error);
}

console.log("Rest of Codes");
console.log("Rest of Codes");
console.log("Rest of Codes");
console.log("Rest of Codes");
console.log("Rest of Codes");