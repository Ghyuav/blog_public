class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample',
      name: 'jump',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'jump to [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    window.location.href=args.ONE;
    return args.ONE;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());