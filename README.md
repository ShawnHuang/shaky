# shaky

Shaky is a awesome shaky box-and-lines ASCII art diagramming tool. You can generate the diagram from ASCII.
All code are compiled from [coffee script](https://github.com/dbushong/shaky) which port from [moe-js](https://moe-js.googlecode.com/git/talks/jsconfeu2012/tools/shaky/shaky.html).

## Dependencies

Because shaky uses `node-canvas` to draw the diagram, we need to install some dependencies for `node-canvas`.
This [page](https://github.com/Automattic/node-canvas/wiki/_pages) introduces many installations in different system.
You can follow these manuals and start to install!

## Install

    npm install -g shaky

## Usage

    shaky -i ascii.txt -o diagram.png

Notice: The program only supports the `png` file extension. 

If you want to write `ascii.txt` file, the following content will be a good example.

````
       +------------+     +------------+
       |            |     |            |
       |  CONTEXT   |<-+  |  CONTEXT   |<-+
       |            |  |  |            |  |
       +------------+  |  +------------+  |
                       |                  |
       +------------+  |  +------------+  |
       |    getY    |  |  |    getY    |  |
       |            |  |  |            |  |
       |     *------+--+  |     *------+--+
       |            |  |  |            |  |
       +------------+  |  +------------+  |
                       |                  |
       +------------+  |  +------------+  |
       |    getX    |  |  |    getX    |  |
       |            |  |  |            |  |
       |     *------+--+  |     *------+--+
       |            |  |  |            |  |
       +------------+  |  +------------+  |
                       |                  |
       +------------+  |  +------------+  |
       |   getSum   |  |  |   getSum   |  |
       |            |  |  |            |  |
       |     *------+--+  |     *------+--+
       |     *      |     |     *      |
       +-----+------+     +-----+------+
             |                  |
             +----------+-------+
                        |
                        v
             +--------------------+
             |  SharedFunctionInfo|
             |          *         |
             +----------+---------+
                        |
                        v
             +--------------------+
             |  unoptimized Code  |
             |                    |
      ??? <--+---* getX call      |
             |                    |
      ??? <--+---* getY call      |
             |                    |
             +--------------------+
    
````

This is the output.

![Output](test/output.png)
