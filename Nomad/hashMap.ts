// Words 타입은 string만을 property로 가지는 오브젝트
// 제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법  
// property의 이름은 모르지만 타입은 알 때 사용 

// 단어 삭제, 업데이트 
type Words = {
    [key:string] : string
}

class Dict {
    private words : Words
    constructor() {
        this.words = {}
    }

    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }

    def(term:string) {
        return this.words[term];
    }

    del(term:string) {
        if(this.words[term] !== undefined) {
            delete this.words[term]
        }
    }

    changeDef(word: Word) {
        if(this.words.hasOwnProperty(word.term)) {
            this.words[word.term] = word.def
        }
    }
}

class Word {
    constructor(
        public readonly term : string,
        public readonly def : string 
    ) {}
}

const kimchi = new Word("kimchi", "한국 음식")
const bread = new Word("bread", "맛있다")
const coffee = new Word("coffee", "종류가 많다")

const dict = new Dict();

dict.add(kimchi);
dict.add(bread);
dict.add(coffee);

dict.changeDef(new Word("bread", "내가 가장 좋아하는 음식"))
dict.del("kimchi")