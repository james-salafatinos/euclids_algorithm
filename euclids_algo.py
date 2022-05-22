def euclids_algo(M,N):
    x = M
    y = N
    max_iter = 100
    GCD = 1

    for i in range(max_iter):
        if x > y:
            x = x - y
        if x < y:
            y = y - x
        if x == y:
            GCD = x
            print(f'Greatest Common Diviser {x}')
            break         
    return GCD
    
euclids_algo(50,15)