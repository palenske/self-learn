def KUniqueCharacters(strParam):

    k = int(strParam[0])
    chars = strParam[1:]
    index = 0
    indexOfChange = 0
    chunk = ""
    substrings = []

    while index < len(chars):
        if len(chunk) == 0:
            chunk = chars[index]
            index += 1

        elif chars[index] in chunk:
            chunk += chars[index]
            index += 1

        elif len(list(set(chunk))) < k:
            chunk += chars[index]
            indexOfChange = index
            index += 1

        if len(list(set(chunk))) == k:
            substrings.append(chunk)
            chunk = ""
            index = indexOfChange
        print(substrings)

    return max(substrings, key=len)


# keep this function call here
print(KUniqueCharacters("3aabacbebebe"))
