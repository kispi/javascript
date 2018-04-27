function whatIsRecursion(iter) {
    if (iter < 0)
        return "";
    
    return `'What is recursion?'\n` +
    `"Listen Kid. Once upon a time, there was a wise man.\n` +
    `He could answer whatever he was asked about.\n` +
    `One day, one guy asked the wise man."\n` + whatIsRecursion(iter-1);
}