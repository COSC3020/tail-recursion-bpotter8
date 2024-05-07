function tailRecursive(n, a = 0, b = 1, sequence = []) {
    if (n == 0) {
        return sequence;
    }
    
    sequence.push(a);
    
    return tailRecursive(n - 1, b, a + b, sequence);
}
