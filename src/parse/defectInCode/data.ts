type DefectItem = {
  defectId: string
  startLine: number
  message: string
  page: number
}

type DefectItemMap = {
  [key in number]: DefectItem[]
}

export const dataArr: DefectItem[] = [
  {
    defectId: '16316',
    startLine: 141,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16273',
    startLine: 7,
    message: "Macro 'ltable_c' is unused",
    page: 7
  },
  {
    defectId: '16274',
    startLine: 75,
    message: 'A generic selection should only be expanded from a macro',
    page: 7
  },
  {
    defectId: '16275',
    startLine: 75,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 7
  },
  {
    defectId: '16276',
    startLine: 75,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 7
  },
  {
    defectId: '16277',
    startLine: 81,
    message:
      'A macro parameter used as an operand to the # or ## operators, which is itself subject to further macro replacement, shall only be used as an operand to theses operators.',
    page: 6
  },
  {
    defectId: '16278',
    startLine: 81,
    message: 'A generic selection should only be expanded from a macro',
    page: 6
  },
  {
    defectId: '16279',
    startLine: 81,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 6
  },
  {
    defectId: '16280',
    startLine: 81,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 6
  },
  {
    defectId: '16281',
    startLine: 84,
    message: 'A generic selection should only be expanded from a macro',
    page: 6
  },
  {
    defectId: '16282',
    startLine: 84,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 6
  },
  {
    defectId: '16283',
    startLine: 84,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 6
  },
  {
    defectId: '16284',
    startLine: 85,
    message: 'A generic selection should only be expanded from a macro',
    page: 6
  },
  {
    defectId: '16285',
    startLine: 85,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 6
  },
  {
    defectId: '16286',
    startLine: 85,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 6
  },
  {
    defectId: '16287',
    startLine: 88,
    message: 'A generic selection should only be expanded from a macro',
    page: 6
  },
  {
    defectId: '16288',
    startLine: 88,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 6
  },
  {
    defectId: '16289',
    startLine: 88,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 6
  },
  {
    defectId: '16290',
    startLine: 94,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16291',
    startLine: 95,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16292',
    startLine: 99,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16293',
    startLine: 108,
    message: 'The function have more than one point of exit.',
    page: 6
  },
  {
    defectId: '16294',
    startLine: 110,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 6
  },
  {
    defectId: '16295',
    startLine: 111,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16296',
    startLine: 111,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16297',
    startLine: 111,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16298',
    startLine: 112,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 6
  },
  {
    defectId: '16299',
    startLine: 113,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16300',
    startLine: 113,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16301',
    startLine: 113,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 6
  },
  {
    defectId: '16302',
    startLine: 113,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16303',
    startLine: 113,
    message: 'The value of a composite expression shall not be assigned to an object with wider essential type.',
    page: 6
  },
  {
    defectId: '16304',
    startLine: 113,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16305',
    startLine: 131,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 6
  },
  {
    defectId: '16306',
    startLine: 131,
    message: 'The function have more than one point of exit.',
    page: 6
  },
  {
    defectId: '16307',
    startLine: 132,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 6
  },
  {
    defectId: '16308',
    startLine: 134,
    message: "the 1st parameter 'n' of function 'l_hashfloat' should not be modified",
    page: 6
  },
  {
    defectId: '16309',
    startLine: 134,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 6
  },
  {
    defectId: '16310',
    startLine: 135,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16311',
    startLine: 135,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 6
  },
  {
    defectId: '16312',
    startLine: 135,
    message: 'operator precedence is not explicit',
    page: 6
  },
  {
    defectId: '16313',
    startLine: 135,
    message: 'Comma operator is not allowed',
    page: 6
  },
  {
    defectId: '16314',
    startLine: 135,
    message: 'Right hand operand of logical operator contains persistent side effects',
    page: 6
  },
  {
    defectId: '16315',
    startLine: 140,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 6
  },
  {
    defectId: '16317',
    startLine: 141,
    message: 'operator precedence is not explicit',
    page: 6
  },
  {
    defectId: '16318',
    startLine: 151,
    message: 'The function have more than one point of exit.',
    page: 6
  },
  {
    defectId: '16319',
    startLine: 152,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16320',
    startLine: 152,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16321',
    startLine: 153,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16322',
    startLine: 153,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16323',
    startLine: 157,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16324',
    startLine: 157,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16325',
    startLine: 159,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16326',
    startLine: 159,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16327',
    startLine: 159,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16328',
    startLine: 161,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16329',
    startLine: 161,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16330',
    startLine: 162,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 6
  },
  {
    defectId: '16331',
    startLine: 162,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 6
  },
  {
    defectId: '16332',
    startLine: 163,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16333',
    startLine: 163,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16334',
    startLine: 163,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 6
  },
  {
    defectId: '16335',
    startLine: 163,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16336',
    startLine: 163,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 6
  },
  {
    defectId: '16337',
    startLine: 163,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16338',
    startLine: 165,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16339',
    startLine: 165,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16340',
    startLine: 166,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 6
  },
  {
    defectId: '16341',
    startLine: 167,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16342',
    startLine: 167,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16343',
    startLine: 167,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 6
  },
  {
    defectId: '16344',
    startLine: 167,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16345',
    startLine: 167,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 6
  },
  {
    defectId: '16346',
    startLine: 167,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16347',
    startLine: 169,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16348',
    startLine: 169,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16349',
    startLine: 170,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16350',
    startLine: 170,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16395',
    startLine: 218,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16351',
    startLine: 170,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16352',
    startLine: 171,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16353',
    startLine: 171,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16354',
    startLine: 172,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16355',
    startLine: 172,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16356',
    startLine: 172,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16357',
    startLine: 173,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16358',
    startLine: 173,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16359',
    startLine: 174,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 6
  },
  {
    defectId: '16360',
    startLine: 175,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16361',
    startLine: 175,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16362',
    startLine: 175,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 6
  },
  {
    defectId: '16363',
    startLine: 175,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16364',
    startLine: 175,
    message: "converting incomplete type 'void *' to incompatible type 'size_t'",
    page: 6
  },
  {
    defectId: '16396',
    startLine: 218,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16365',
    startLine: 175,
    message: "A cast should not be performed between a object-pointer 'void *'and an integer type.",
    page: 6
  },
  {
    defectId: '16366',
    startLine: 175,
    message: "The pointer 'void *' cannot be converted to the arithmetic type 'size_t'.",
    page: 6
  },
  {
    defectId: '16367',
    startLine: 175,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16368',
    startLine: 177,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16369',
    startLine: 177,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16370',
    startLine: 179,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 6
  },
  {
    defectId: '16371',
    startLine: 179,
    message: 'operand has inappropriate essential type',
    page: 6
  },
  {
    defectId: '16372',
    startLine: 179,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 6
  },
  {
    defectId: '16373',
    startLine: 179,
    message: 'both operands have different essential type categories',
    page: 6
  },
  {
    defectId: '16374',
    startLine: 179,
    message: "converting function pointer type 'lua_CFunction' to incompatible type 'size_t'",
    page: 6
  },
  {
    defectId: '16375',
    startLine: 179,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 6
  },
  {
    defectId: '16376',
    startLine: 181,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 6
  },
  {
    defectId: '16377',
    startLine: 182,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 5
  },
  {
    defectId: '16378',
    startLine: 183,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 5
  },
  {
    defectId: '16379',
    startLine: 183,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16380',
    startLine: 183,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 5
  },
  {
    defectId: '16381',
    startLine: 183,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16382',
    startLine: 183,
    message: "A cast should not be performed between a object-pointer 'GCObject *'and an integer type.",
    page: 5
  },
  {
    defectId: '16383',
    startLine: 183,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16384',
    startLine: 189,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 5
  },
  {
    defectId: '16424',
    startLine: 251,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 5
  },
  {
    defectId: '16385',
    startLine: 191,
    message: 'Comma operator is not allowed',
    page: 5
  },
  {
    defectId: '16386',
    startLine: 191,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'lua_State *'.",
    page: 5
  },
  {
    defectId: '16387',
    startLine: 216,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16388',
    startLine: 216,
    message: 'The function have more than one point of exit.',
    page: 5
  },
  {
    defectId: '16389',
    startLine: 216,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16390',
    startLine: 217,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16391',
    startLine: 217,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16392',
    startLine: 217,
    message:
      "The value of the 'k1' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16393',
    startLine: 217,
    message:
      "The value of the 'n2' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16394',
    startLine: 218,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16397',
    startLine: 218,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16398',
    startLine: 218,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16399',
    startLine: 218,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16400',
    startLine: 218,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16401',
    startLine: 221,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16402',
    startLine: 221,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16403',
    startLine: 221,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16425',
    startLine: 251,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16404',
    startLine: 221,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16405',
    startLine: 223,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16406',
    startLine: 223,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16407',
    startLine: 225,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16408',
    startLine: 225,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16409',
    startLine: 227,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16410',
    startLine: 227,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16411',
    startLine: 229,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16412',
    startLine: 229,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16413',
    startLine: 231,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16414',
    startLine: 231,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16415',
    startLine: 231,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16416',
    startLine: 232,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 5
  },
  {
    defectId: '16426',
    startLine: 251,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16417',
    startLine: 232,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 5
  },
  {
    defectId: '16418',
    startLine: 233,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 5
  },
  {
    defectId: '16419',
    startLine: 234,
    message:
      'The relational operators >, >=, < and <= shall not be applied to objects of pointer type except where they point into the same object',
    page: 5
  },
  {
    defectId: '16420',
    startLine: 244,
    message: 'A generic selection should only be expanded from a macro',
    page: 5
  },
  {
    defectId: '16421',
    startLine: 244,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 5
  },
  {
    defectId: '16422',
    startLine: 250,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16423',
    startLine: 250,
    message: 'The function have more than one point of exit.',
    page: 5
  },
  {
    defectId: '16427',
    startLine: 251,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16428',
    startLine: 251,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16429',
    startLine: 254,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16430',
    startLine: 276,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16431',
    startLine: 277,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16432',
    startLine: 277,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16433',
    startLine: 277,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16434',
    startLine: 277,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16435',
    startLine: 277,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16436',
    startLine: 277,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16437',
    startLine: 281,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16438',
    startLine: 282,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16439',
    startLine: 283,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16440',
    startLine: 283,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 5
  },
  {
    defectId: '16441',
    startLine: 288,
    message: 'A generic selection should only be expanded from a macro',
    page: 5
  },
  {
    defectId: '16442',
    startLine: 288,
    message: 'A default association shall appear as either the first or the last association of a generic selection',
    page: 5
  },
  {
    defectId: '16443',
    startLine: 288,
    message: 'Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.',
    page: 5
  },
  {
    defectId: '16444',
    startLine: 297,
    message: 'The function have more than one point of exit.',
    page: 5
  },
  {
    defectId: '16445',
    startLine: 297,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 5
  },
  {
    defectId: '16446',
    startLine: 297,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16447',
    startLine: 300,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 5
  },
  {
    defectId: '16448',
    startLine: 300,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16449',
    startLine: 300,
    message: "Controlling expressions may be always 'false'",
    page: 5
  },
  {
    defectId: '16450',
    startLine: 303,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16451',
    startLine: 304,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16452',
    startLine: 306,
    message: "'+=' operator applied to the expression of pointer type",
    page: 5
  },
  {
    defectId: '16543',
    startLine: 398,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16453',
    startLine: 316,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16454',
    startLine: 316,
    message: 'The function have more than one point of exit.',
    page: 5
  },
  {
    defectId: '16455',
    startLine: 317,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16456',
    startLine: 317,
    message: 'operator precedence is not explicit',
    page: 5
  },
  {
    defectId: '16457',
    startLine: 317,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 5
  },
  {
    defectId: '16458',
    startLine: 317,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16459',
    startLine: 317,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16460',
    startLine: 317,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 5
  },
  {
    defectId: '16461',
    startLine: 317,
    message: 'operator precedence is not explicit',
    page: 5
  },
  {
    defectId: '16462',
    startLine: 319,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16463',
    startLine: 329,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16464',
    startLine: 329,
    message: 'The function have more than one point of exit.',
    page: 5
  },
  {
    defectId: '16465',
    startLine: 329,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 5
  },
  {
    defectId: '16466',
    startLine: 329,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 5
  },
  {
    defectId: '16467',
    startLine: 330,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16468',
    startLine: 331,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 5
  },
  {
    defectId: '16469',
    startLine: 332,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 5
  },
  {
    defectId: '16470',
    startLine: 332,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 5
  },
  {
    defectId: '16471',
    startLine: 332,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16472',
    startLine: 332,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16473',
    startLine: 333,
    message: 'operand has inappropriate essential type',
    page: 5
  },
  {
    defectId: '16474',
    startLine: 333,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16475',
    startLine: 333,
    message:
      "The value of the 'key' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 5
  },
  {
    defectId: '16476',
    startLine: 333,
    message: 'both operands have different essential type categories',
    page: 5
  },
  {
    defectId: '16477',
    startLine: 334,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16478',
    startLine: 334,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16479',
    startLine: 338,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 4
  },
  {
    defectId: '16480',
    startLine: 338,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16481',
    startLine: 338,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16482',
    startLine: 338,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16489',
    startLine: 342,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16483',
    startLine: 338,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16484',
    startLine: 340,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16485',
    startLine: 340,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 4
  },
  {
    defectId: '16486',
    startLine: 340,
    message: "A cast shall not be performed from pointer 'const TValue *' to pointer 'Node *'.",
    page: 4
  },
  {
    defectId: '16487',
    startLine: 340,
    message: "Conversion from 'const TValue *' to 'Node *', existence qualifier is deleted",
    page: 4
  },
  {
    defectId: '16488',
    startLine: 340,
    message: 'Subtraction between pointers shall only be applied to pointers that address elements of the same array',
    page: 4
  },
  {
    defectId: '16490',
    startLine: 347,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16491',
    startLine: 347,
    message: 'The function have more than one point of exit.',
    page: 4
  },
  {
    defectId: '16492',
    startLine: 347,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 4
  },
  {
    defectId: '16493',
    startLine: 348,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16494',
    startLine: 349,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16495',
    startLine: 350,
    message: 'A for loop shall be well-formed.',
    page: 4
  },
  {
    defectId: '16496',
    startLine: 351,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16497',
    startLine: 351,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16511',
    startLine: 361,
    message: "'+' operator applied to the expression of pointer type",
    page: 4
  },
  {
    defectId: '16498',
    startLine: 352,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16499',
    startLine: 352,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16500',
    startLine: 352,
    message: 'The value of a composite expression shall not be assigned to an object with wider essential type.',
    page: 4
  },
  {
    defectId: '16501',
    startLine: 352,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16502',
    startLine: 353,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16503',
    startLine: 353,
    message: "'+' operator applied to the expression of pointer type",
    page: 4
  },
  {
    defectId: '16504',
    startLine: 357,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 4
  },
  {
    defectId: '16512',
    startLine: 369,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 4
  },
  {
    defectId: '16505',
    startLine: 357,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16506',
    startLine: 358,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16507',
    startLine: 358,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16508',
    startLine: 359,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 4
  },
  {
    defectId: '16509',
    startLine: 360,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16510',
    startLine: 361,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16529',
    startLine: 396,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16513',
    startLine: 370,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16514',
    startLine: 370,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 4
  },
  {
    defectId: '16515',
    startLine: 370,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16516',
    startLine: 371,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 4
  },
  {
    defectId: '16517',
    startLine: 371,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 4
  },
  {
    defectId: '16518',
    startLine: 371,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 4
  },
  {
    defectId: '16519',
    startLine: 371,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 4
  },
  {
    defectId: '16530',
    startLine: 396,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16520',
    startLine: 371,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16521',
    startLine: 389,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16522',
    startLine: 389,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 4
  },
  {
    defectId: '16523',
    startLine: 389,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16524',
    startLine: 390,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16525',
    startLine: 391,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16526',
    startLine: 392,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16527',
    startLine: 393,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16528',
    startLine: 394,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16531',
    startLine: 396,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16532',
    startLine: 396,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16533',
    startLine: 397,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16534',
    startLine: 397,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16535',
    startLine: 397,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16536',
    startLine: 397,
    message: 'operand has inappropriate essential type',
    page: 4
  },
  {
    defectId: '16537',
    startLine: 397,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16538',
    startLine: 397,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16539',
    startLine: 397,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16540',
    startLine: 398,
    message:
      'A expression containing an increment (++) or decrement (--) operator should have no other potential side effects other than that caused by the increment or decrement operator',
    page: 4
  },
  {
    defectId: '16541',
    startLine: 398,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16542',
    startLine: 398,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16544',
    startLine: 400,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16545',
    startLine: 400,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16546',
    startLine: 411,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16547',
    startLine: 411,
    message: 'The function have more than one point of exit.',
    page: 4
  },
  {
    defectId: '16548',
    startLine: 411,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16549',
    startLine: 411,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 4
  },
  {
    defectId: '16550',
    startLine: 412,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16551',
    startLine: 413,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16552',
    startLine: 417,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16553',
    startLine: 427,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16554',
    startLine: 427,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16555',
    startLine: 428,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16556',
    startLine: 429,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16557',
    startLine: 430,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16558',
    startLine: 431,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16559',
    startLine: 432,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16560',
    startLine: 434,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16561',
    startLine: 434,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16562',
    startLine: 434,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16563',
    startLine: 434,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16572',
    startLine: 435,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16564',
    startLine: 434,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 4
  },
  {
    defectId: '16565',
    startLine: 434,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16566',
    startLine: 434,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 4
  },
  {
    defectId: '16567',
    startLine: 434,
    message: 'operator precedence is not explicit',
    page: 4
  },
  {
    defectId: '16568',
    startLine: 434,
    message:
      'A expression containing an increment (++) or decrement (--) operator should have no other potential side effects other than that caused by the increment or decrement operator',
    page: 4
  },
  {
    defectId: '16569',
    startLine: 434,
    message: 'Comma operator is not allowed',
    page: 4
  },
  {
    defectId: '16570',
    startLine: 434,
    message: 'both operands have different essential type categories',
    page: 4
  },
  {
    defectId: '16571',
    startLine: 434,
    message: 'Avoid using the result of assignment operator',
    page: 4
  },
  {
    defectId: '16600',
    startLine: 479,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16573',
    startLine: 436,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 4
  },
  {
    defectId: '16574',
    startLine: 439,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16575',
    startLine: 443,
    message: 'A for loop shall be well-formed.',
    page: 4
  },
  {
    defectId: '16576',
    startLine: 444,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 4
  },
  {
    defectId: '16577',
    startLine: 444,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16578',
    startLine: 444,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16579',
    startLine: 444,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16580',
    startLine: 454,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16581',
    startLine: 454,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16582',
    startLine: 454,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16583',
    startLine: 455,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16584',
    startLine: 456,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16585',
    startLine: 457,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16586',
    startLine: 457,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 3
  },
  {
    defectId: '16587',
    startLine: 457,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16588',
    startLine: 458,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 3
  },
  {
    defectId: '16589',
    startLine: 459,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 3
  },
  {
    defectId: '16590',
    startLine: 460,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16591',
    startLine: 460,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16592',
    startLine: 461,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 3
  },
  {
    defectId: '16593',
    startLine: 461,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 3
  },
  {
    defectId: '16594',
    startLine: 461,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16595',
    startLine: 461,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16596',
    startLine: 466,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16597',
    startLine: 466,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 3
  },
  {
    defectId: '16598',
    startLine: 478,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 3
  },
  {
    defectId: '16599',
    startLine: 478,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16601',
    startLine: 480,
    message: "A cast shall not be performed from pointer 'const Node *' to pointer 'Node *'.",
    page: 3
  },
  {
    defectId: '16602',
    startLine: 480,
    message: "Conversion from 'const Node *' to 'Node *', existence qualifier is deleted",
    page: 3
  },
  {
    defectId: '16603',
    startLine: 481,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16604',
    startLine: 482,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'Node *'.",
    page: 3
  },
  {
    defectId: '16605',
    startLine: 485,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16606',
    startLine: 486,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16607',
    startLine: 487,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 3
  },
  {
    defectId: '16608',
    startLine: 487,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16609',
    startLine: 487,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16610',
    startLine: 487,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 3
  },
  {
    defectId: '16611',
    startLine: 487,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16612',
    startLine: 487,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 3
  },
  {
    defectId: '16613',
    startLine: 487,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16614',
    startLine: 487,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16615',
    startLine: 487,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 3
  },
  {
    defectId: '16616',
    startLine: 487,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16617',
    startLine: 487,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16618',
    startLine: 487,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 3
  },
  {
    defectId: '16619',
    startLine: 487,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16620',
    startLine: 487,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16621',
    startLine: 487,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 3
  },
  {
    defectId: '16622',
    startLine: 487,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16623',
    startLine: 489,
    message: "the 3st parameter 'size' of function 'setnodevector' should not be modified",
    page: 3
  },
  {
    defectId: '16624',
    startLine: 489,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16625',
    startLine: 489,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 3
  },
  {
    defectId: '16626',
    startLine: 489,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16627',
    startLine: 489,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 3
  },
  {
    defectId: '16628',
    startLine: 490,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 3
  },
  {
    defectId: '16629',
    startLine: 490,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'Node *'.",
    page: 3
  },
  {
    defectId: '16630',
    startLine: 490,
    message: "Pointer to void cannot be cast to pointer 'Node *'.",
    page: 3
  },
  {
    defectId: '16631',
    startLine: 492,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 3
  },
  {
    defectId: '16632',
    startLine: 494,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16633',
    startLine: 495,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16634',
    startLine: 495,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16635',
    startLine: 498,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 3
  },
  {
    defectId: '16636',
    startLine: 506,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 3
  },
  {
    defectId: '16637',
    startLine: 506,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 3
  },
  {
    defectId: '16638',
    startLine: 507,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16639',
    startLine: 508,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16657',
    startLine: 553,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16640',
    startLine: 508,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 3
  },
  {
    defectId: '16641',
    startLine: 508,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16642',
    startLine: 511,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16643',
    startLine: 511,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16644',
    startLine: 515,
    message: 'Comma operator is not allowed',
    page: 3
  },
  {
    defectId: '16645',
    startLine: 526,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16646',
    startLine: 527,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16647',
    startLine: 528,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16648',
    startLine: 529,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16649',
    startLine: 530,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16650',
    startLine: 531,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16658',
    startLine: 555,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16651',
    startLine: 532,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16652',
    startLine: 533,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16653',
    startLine: 534,
    message: 'The value of an object with automatic storage duration shall not be read before it has been set',
    page: 3
  },
  {
    defectId: '16654',
    startLine: 551,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 3
  },
  {
    defectId: '16655',
    startLine: 551,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16656',
    startLine: 552,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 3
  },
  {
    defectId: '16659',
    startLine: 564,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 3
  },
  {
    defectId: '16660',
    startLine: 564,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16661',
    startLine: 564,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16662',
    startLine: 565,
    message: 'The value of a composite expression shall not be assigned to an object with wider essential type.',
    page: 3
  },
  {
    defectId: '16663',
    startLine: 565,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16664',
    startLine: 565,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 3
  },
  {
    defectId: '16665',
    startLine: 571,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 3
  },
  {
    defectId: '16666',
    startLine: 571,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'TValue *'.",
    page: 3
  },
  {
    defectId: '16700',
    startLine: 603,
    message: 'The function returns information shall be tested.',
    page: 2
  },
  {
    defectId: '16667',
    startLine: 571,
    message: "Pointer to void cannot be cast to pointer 'TValue *'.",
    page: 3
  },
  {
    defectId: '16668',
    startLine: 572,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 3
  },
  {
    defectId: '16669',
    startLine: 572,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16670',
    startLine: 572,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16671',
    startLine: 572,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16672',
    startLine: 572,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16673',
    startLine: 572,
    message: 'operator precedence is not explicit',
    page: 3
  },
  {
    defectId: '16674',
    startLine: 580,
    message: 'The body of the for-statement shall be a compound-statement.',
    page: 3
  },
  {
    defectId: '16675',
    startLine: 581,
    message: 'operand has inappropriate essential type',
    page: 3
  },
  {
    defectId: '16701',
    startLine: 603,
    message: "Return value of function 'setlimittosize' is unused",
    page: 2
  },
  {
    defectId: '16676',
    startLine: 581,
    message: 'both operands have different essential type categories',
    page: 3
  },
  {
    defectId: '16677',
    startLine: 588,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 2
  },
  {
    defectId: '16678',
    startLine: 588,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16679',
    startLine: 589,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16680',
    startLine: 589,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 2
  },
  {
    defectId: '16681',
    startLine: 589,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16682',
    startLine: 589,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16683',
    startLine: 590,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 2
  },
  {
    defectId: '16702',
    startLine: 605,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16684',
    startLine: 596,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 2
  },
  {
    defectId: '16685',
    startLine: 597,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16686',
    startLine: 598,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16687',
    startLine: 599,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16688',
    startLine: 599,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 2
  },
  {
    defectId: '16689',
    startLine: 599,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16690',
    startLine: 599,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 2
  },
  {
    defectId: '16691',
    startLine: 599,
    message: 'operator precedence is not explicit',
    page: 2
  },
  {
    defectId: '16692',
    startLine: 600,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16693',
    startLine: 601,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 2
  },
  {
    defectId: '16694',
    startLine: 602,
    message: 'The body of the for-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16695',
    startLine: 602,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 2
  },
  {
    defectId: '16696',
    startLine: 602,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16697',
    startLine: 602,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 2
  },
  {
    defectId: '16698',
    startLine: 602,
    message: 'operator precedence is not explicit',
    page: 2
  },
  {
    defectId: '16699',
    startLine: 602,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16703',
    startLine: 605,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 2
  },
  {
    defectId: '16704',
    startLine: 608,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16705',
    startLine: 608,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16706',
    startLine: 608,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16707',
    startLine: 608,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16708',
    startLine: 609,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16709',
    startLine: 609,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 2
  },
  {
    defectId: '16710',
    startLine: 614,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 2
  },
  {
    defectId: '16711',
    startLine: 614,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16712',
    startLine: 624,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 2
  },
  {
    defectId: '16713',
    startLine: 625,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16714',
    startLine: 625,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 2
  },
  {
    defectId: '16715',
    startLine: 626,
    message: "A cast shall not be performed from pointer 'GCObject *' to pointer 'union GCUnion *'.",
    page: 2
  },
  {
    defectId: '16716',
    startLine: 627,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'struct Table *'.",
    page: 2
  },
  {
    defectId: '16717',
    startLine: 629,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'TValue *'.",
    page: 2
  },
  {
    defectId: '16718',
    startLine: 630,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16719',
    startLine: 636,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 2
  },
  {
    defectId: '16728',
    startLine: 647,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16720',
    startLine: 638,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 2
  },
  {
    defectId: '16721',
    startLine: 638,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16722',
    startLine: 639,
    message: "Emergent language features '_Alignof' shall not be used.",
    page: 2
  },
  {
    defectId: '16723',
    startLine: 643,
    message: 'The function have more than one point of exit.',
    page: 2
  },
  {
    defectId: '16724',
    startLine: 644,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16725',
    startLine: 645,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16726',
    startLine: 645,
    message:
      'The relational operators >, >=, < and <= shall not be applied to objects of pointer type except where they point into the same object',
    page: 2
  },
  {
    defectId: '16727',
    startLine: 647,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16729',
    startLine: 647,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16730',
    startLine: 663,
    message: 'The function have more than one point of exit.',
    page: 2
  },
  {
    defectId: '16731',
    startLine: 663,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 2
  },
  {
    defectId: '16732',
    startLine: 666,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16733',
    startLine: 666,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16734',
    startLine: 666,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16741',
    startLine: 672,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16742',
    startLine: 673,
    message: "the 3st parameter 'key' of function 'luaH_newkey' should not be modified",
    page: 2
  },
  {
    defectId: '16735',
    startLine: 666,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16736',
    startLine: 668,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16737',
    startLine: 668,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16738',
    startLine: 668,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16739',
    startLine: 671,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16740',
    startLine: 672,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16743',
    startLine: 675,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16744',
    startLine: 675,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16745',
    startLine: 675,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16746',
    startLine: 676,
    message:
      'All if...else if constructs shall be terminated with an else statement contained at least one comment or side-effect.',
    page: 2
  },
  {
    defectId: '16747',
    startLine: 677,
    message:
      'All if...else if constructs shall be terminated with an else statement contained at least one comment or side-effect.',
    page: 2
  },
  {
    defectId: '16748',
    startLine: 678,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 2
  },
  {
    defectId: '16749',
    startLine: 678,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16750',
    startLine: 678,
    message: "Controlling expressions may be always 'false'",
    page: 2
  },
  {
    defectId: '16751',
    startLine: 678,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16752',
    startLine: 678,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16753',
    startLine: 681,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16754',
    startLine: 681,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16755',
    startLine: 681,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16756',
    startLine: 681,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16757',
    startLine: 692,
    message:
      'The relational operators >, >=, < and <= shall not be applied to objects of pointer type except where they point into the same object',
    page: 2
  },
  {
    defectId: '16758',
    startLine: 694,
    message: 'The body of the while-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16759',
    startLine: 694,
    message: "'+' operator applied to the expression of pointer type",
    page: 2
  },
  {
    defectId: '16760',
    startLine: 694,
    message: 'operator precedence is not explicit',
    page: 2
  },
  {
    defectId: '16761',
    startLine: 694,
    message:
      "The value of the 'othern' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16762',
    startLine: 694,
    message:
      'The relational operators >, >=, < and <= shall not be applied to objects of pointer type except where they point into the same object',
    page: 2
  },
  {
    defectId: '16763',
    startLine: 695,
    message: "'+=' operator applied to the expression of pointer type",
    page: 2
  },
  {
    defectId: '16764',
    startLine: 696,
    message:
      "The value of the 'othern' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16765',
    startLine: 696,
    message: 'Subtraction between pointers shall only be applied to pointers that address elements of the same array',
    page: 2
  },
  {
    defectId: '16774',
    startLine: 707,
    message:
      "The value of the 'mp' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16775',
    startLine: 707,
    message: 'Subtraction between pointers shall only be applied to pointers that address elements of the same array',
    page: 2
  },
  {
    defectId: '16766',
    startLine: 697,
    message:
      'a pointer resulting from arithmetic on a pointer operand shall address an element of the same array as that pointer operand',
    page: 2
  },
  {
    defectId: '16767',
    startLine: 699,
    message:
      "The value of the 'f' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16768',
    startLine: 699,
    message: 'Subtraction between pointers shall only be applied to pointers that address elements of the same array',
    page: 2
  },
  {
    defectId: '16769',
    startLine: 702,
    message: 'operand has inappropriate essential type',
    page: 2
  },
  {
    defectId: '16770',
    startLine: 702,
    message: 'both operands have different essential type categories',
    page: 2
  },
  {
    defectId: '16771',
    startLine: 706,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16772',
    startLine: 707,
    message:
      "The value of the 'f' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 2
  },
  {
    defectId: '16773',
    startLine: 707,
    message: "'+' operator applied to the expression of pointer type",
    page: 2
  },
  {
    defectId: '16776',
    startLine: 708,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 2
  },
  {
    defectId: '16777',
    startLine: 709,
    message:
      "The value of the 'mp' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16778',
    startLine: 709,
    message: 'Subtraction between pointers shall only be applied to pointers that address elements of the same array',
    page: 1
  },
  {
    defectId: '16779',
    startLine: 713,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 1
  },
  {
    defectId: '16780',
    startLine: 713,
    message: 'Comma operator is not allowed',
    page: 1
  },
  {
    defectId: '16781',
    startLine: 714,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16782',
    startLine: 714,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16790',
    startLine: 731,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16783',
    startLine: 714,
    message: "A cast shall not be performed from pointer 'Table *' to pointer 'union GCUnion *'.",
    page: 1
  },
  {
    defectId: '16784',
    startLine: 714,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16785',
    startLine: 714,
    message:
      "The value of the 'key' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16786',
    startLine: 716,
    message: 'Comma operator is not allowed',
    page: 1
  },
  {
    defectId: '16787',
    startLine: 728,
    message: 'The function have more than one point of exit.',
    page: 1
  },
  {
    defectId: '16788',
    startLine: 729,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16789',
    startLine: 729,
    message: 'operator precedence is not explicit',
    page: 1
  },
  {
    defectId: '16791',
    startLine: 731,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16792',
    startLine: 731,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16793',
    startLine: 731,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16794',
    startLine: 732,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16795',
    startLine: 732,
    message: 'Right hand operand of logical operator contains persistent side effects',
    page: 1
  },
  {
    defectId: '16796',
    startLine: 732,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16797',
    startLine: 732,
    message: 'operator precedence is not explicit',
    page: 1
  },
  {
    defectId: '16798',
    startLine: 732,
    message: 'The value of a composite expression shall not be assigned to an object with wider essential type.',
    page: 1
  },
  {
    defectId: '16799',
    startLine: 732,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16810',
    startLine: 743,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 1
  },
  {
    defectId: '16800',
    startLine: 733,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16801',
    startLine: 733,
    message: 'Right hand operand of logical operator contains persistent side effects',
    page: 1
  },
  {
    defectId: '16802',
    startLine: 733,
    message: 'operator precedence is not explicit',
    page: 1
  },
  {
    defectId: '16803',
    startLine: 733,
    message: 'operator precedence is not explicit',
    page: 1
  },
  {
    defectId: '16804',
    startLine: 740,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16805',
    startLine: 740,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16806',
    startLine: 740,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16807',
    startLine: 740,
    message:
      "The value of the 'n' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16808',
    startLine: 740,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16809',
    startLine: 740,
    message: 'operator precedence is not explicit',
    page: 1
  },
  {
    defectId: '16811',
    startLine: 744,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16812',
    startLine: 745,
    message: "'+=' operator applied to the expression of pointer type",
    page: 1
  },
  {
    defectId: '16813',
    startLine: 756,
    message: 'The function have more than one point of exit.',
    page: 1
  },
  {
    defectId: '16814',
    startLine: 756,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 1
  },
  {
    defectId: '16815',
    startLine: 756,
    message: 'A pointer should point to a const-qualified type whenever possible',
    page: 1
  },
  {
    defectId: '16816',
    startLine: 757,
    message: 'the right operand of shift operator is not in [0, 31]',
    page: 1
  },
  {
    defectId: '16817',
    startLine: 757,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16825',
    startLine: 760,
    message:
      "The value of the 'n' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16818',
    startLine: 757,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 1
  },
  {
    defectId: '16819',
    startLine: 757,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16820',
    startLine: 757,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 1
  },
  {
    defectId: '16821',
    startLine: 757,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 1
  },
  {
    defectId: '16822',
    startLine: 760,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16823',
    startLine: 760,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16824',
    startLine: 760,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16826',
    startLine: 760,
    message:
      'The relational operators >, >=, < and <= shall not be applied to objects of pointer type except where they point into the same object',
    page: 1
  },
  {
    defectId: '16827',
    startLine: 760,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16828',
    startLine: 760,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 1
  },
  {
    defectId: '16829',
    startLine: 763,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 1
  },
  {
    defectId: '16830',
    startLine: 764,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16831',
    startLine: 766,
    message: "'+=' operator applied to the expression of pointer type",
    page: 1
  },
  {
    defectId: '16832',
    startLine: 772,
    message: 'The function have more than one point of exit.',
    page: 1
  },
  {
    defectId: '16833',
    startLine: 773,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16834',
    startLine: 773,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16835',
    startLine: 773,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16836',
    startLine: 777,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16837',
    startLine: 777,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 1
  },
  {
    defectId: '16838',
    startLine: 777,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16845',
    startLine: 788,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 1
  },
  {
    defectId: '16839',
    startLine: 777,
    message: "A cast shall not be performed from pointer 'TString *' to pointer 'union GCUnion *'.",
    page: 1
  },
  {
    defectId: '16840',
    startLine: 777,
    message: 'Comma operator is not allowed',
    page: 1
  },
  {
    defectId: '16841',
    startLine: 777,
    message: "A cast shall not be performed from pointer 'void *' to pointer 'lua_State *'.",
    page: 1
  },
  {
    defectId: '16842',
    startLine: 786,
    message: 'The function have more than one point of exit.',
    page: 1
  },
  {
    defectId: '16843',
    startLine: 787,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16844',
    startLine: 787,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16846',
    startLine: 788,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16847',
    startLine: 788,
    message: "A cast shall not be performed from pointer 'struct GCObject *' to pointer 'union GCUnion *'.",
    page: 1
  },
  {
    defectId: '16848',
    startLine: 789,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 1
  },
  {
    defectId: '16849',
    startLine: 789,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16850',
    startLine: 790,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 1
  },
  {
    defectId: '16851',
    startLine: 790,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16852',
    startLine: 791,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 1
  },
  {
    defectId: '16853',
    startLine: 791,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16854',
    startLine: 793,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 1
  },
  {
    defectId: '16855',
    startLine: 793,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16856',
    startLine: 797,
    message: 'The case or default do not have unconditional break to terminate the switch statement.',
    page: 1
  },
  {
    defectId: '16857',
    startLine: 809,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 1
  },
  {
    defectId: '16858',
    startLine: 811,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 1
  },
  {
    defectId: '16859',
    startLine: 811,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16860',
    startLine: 811,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16873',
    startLine: 836,
    message: "A cast shall not be performed from pointer 'const TValue *' to pointer 'TValue *'.",
    page: 1
  },
  {
    defectId: '16861',
    startLine: 811,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16862',
    startLine: 814,
    message: 'Comma operator is not allowed',
    page: 1
  },
  {
    defectId: '16863',
    startLine: 814,
    message: "A cast shall not be performed from pointer 'const TValue *' to pointer 'TValue *'.",
    page: 1
  },
  {
    defectId: '16864',
    startLine: 814,
    message: "Conversion from 'const TValue *' to 'TValue *', existence qualifier is deleted",
    page: 1
  },
  {
    defectId: '16865',
    startLine: 822,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 1
  },
  {
    defectId: '16866',
    startLine: 828,
    message:
      'The RecordDecl is never dereferenced within a translation unit so that the implementation of the object should be hidden.',
    page: 1
  },
  {
    defectId: '16867',
    startLine: 830,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 1
  },
  {
    defectId: '16883',
    startLine: 859,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16868',
    startLine: 830,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16869',
    startLine: 830,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16870',
    startLine: 832,
    message: 'operand has inappropriate essential type',
    page: 1
  },
  {
    defectId: '16871',
    startLine: 832,
    message: 'both operands have different essential type categories',
    page: 1
  },
  {
    defectId: '16872',
    startLine: 836,
    message: 'Comma operator is not allowed',
    page: 1
  },
  {
    defectId: '16903',
    startLine: 872,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16874',
    startLine: 836,
    message: "Conversion from 'const TValue *' to 'TValue *', existence qualifier is deleted",
    page: 1
  },
  {
    defectId: '16875',
    startLine: 853,
    message: 'The function have more than one point of exit.',
    page: 1
  },
  {
    defectId: '16876',
    startLine: 855,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 1
  },
  {
    defectId: '16877',
    startLine: 855,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16878',
    startLine: 855,
    message: "the 2nd parameter 'j' of function 'hash_search' should not be modified",
    page: 0
  },
  {
    defectId: '16879',
    startLine: 858,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16880',
    startLine: 858,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16881',
    startLine: 858,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16882',
    startLine: 859,
    message: "the 2nd parameter 'j' of function 'hash_search' should not be modified",
    page: 0
  },
  {
    defectId: '16884',
    startLine: 861,
    message: "the 2nd parameter 'j' of function 'hash_search' should not be modified",
    page: 0
  },
  {
    defectId: '16885',
    startLine: 861,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16886',
    startLine: 862,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 0
  },
  {
    defectId: '16887',
    startLine: 862,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16888',
    startLine: 862,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16889',
    startLine: 862,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16890',
    startLine: 862,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 0
  },
  {
    defectId: '16891',
    startLine: 864,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16892',
    startLine: 867,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16893',
    startLine: 867,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16894',
    startLine: 867,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 0
  },
  {
    defectId: '16895',
    startLine: 869,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16896',
    startLine: 870,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16897',
    startLine: 871,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 0
  },
  {
    defectId: '16898',
    startLine: 871,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16899',
    startLine: 871,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16900',
    startLine: 871,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16901',
    startLine: 871,
    message:
      'The value of an expression shall not be assigned to an object with a narrower essential type or of a different essential type category.',
    page: 0
  },
  {
    defectId: '16902',
    startLine: 871,
    message: "the 2nd parameter 'j' of function 'hash_search' should not be modified",
    page: 0
  },
  {
    defectId: '16904',
    startLine: 878,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16905',
    startLine: 878,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16906',
    startLine: 879,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16907',
    startLine: 880,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16908',
    startLine: 881,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16909',
    startLine: 881,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16910',
    startLine: 882,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 0
  },
  {
    defectId: '16911',
    startLine: 882,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16912',
    startLine: 882,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16913',
    startLine: 882,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16914',
    startLine: 882,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16915',
    startLine: 882,
    message: "the 3st parameter 'j' of function 'binsearch' should not be modified",
    page: 0
  },
  {
    defectId: '16916',
    startLine: 883,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16917',
    startLine: 883,
    message: "the 2nd parameter 'i' of function 'binsearch' should not be modified",
    page: 0
  },
  {
    defectId: '16918',
    startLine: 921,
    message: 'The function have more than one point of exit.',
    page: 0
  },
  {
    defectId: '16919',
    startLine: 922,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16920',
    startLine: 923,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16921',
    startLine: 923,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16922',
    startLine: 923,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16923',
    startLine: 923,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16924',
    startLine: 923,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16925',
    startLine: 923,
    message:
      "The value of the 'limit' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 0
  },
  {
    defectId: '16926',
    startLine: 923,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16927',
    startLine: 925,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16928',
    startLine: 925,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16929',
    startLine: 925,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16930',
    startLine: 925,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16931',
    startLine: 925,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16932',
    startLine: 925,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16933',
    startLine: 925,
    message:
      "The value of the 'limit' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 0
  },
  {
    defectId: '16934',
    startLine: 925,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16935',
    startLine: 927,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16936',
    startLine: 927,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16937',
    startLine: 927,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16938',
    startLine: 927,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16939',
    startLine: 927,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16940',
    startLine: 928,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16941',
    startLine: 929,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16942',
    startLine: 929,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16943',
    startLine: 931,
    message: 'The value of a composite expression shall not be assigned to an object with wider essential type.',
    page: 0
  },
  {
    defectId: '16944',
    startLine: 931,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16945',
    startLine: 934,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16946',
    startLine: 936,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16947',
    startLine: 936,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16948',
    startLine: 936,
    message: 'Right hand operand of logical operator contains persistent side effects',
    page: 0
  },
  {
    defectId: '16949',
    startLine: 936,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16950',
    startLine: 936,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16951',
    startLine: 936,
    message: 'operator precedence is not explicit',
    page: 0
  },
  {
    defectId: '16952',
    startLine: 938,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16953',
    startLine: 938,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16954',
    startLine: 944,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16955',
    startLine: 944,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16956',
    startLine: 944,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 0
  },
  {
    defectId: '16957',
    startLine: 946,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 0
  },
  {
    defectId: '16958',
    startLine: 946,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16959',
    startLine: 946,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16960',
    startLine: 946,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16961',
    startLine: 950,
    message: 'The controlling expression shall have essentially Boolean type.',
    page: 0
  },
  {
    defectId: '16962',
    startLine: 950,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16963',
    startLine: 950,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16964',
    startLine: 950,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16965',
    startLine: 953,
    message:
      'Typedefs that indicate size and signedness provided by <stdint.h> should be used in place of the basic numerical types.',
    page: 0
  },
  {
    defectId: '16966',
    startLine: 953,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 0
  },
  {
    defectId: '16967',
    startLine: 962,
    message: 'The body of the if-statement shall be a compound-statement.',
    page: 0
  },
  {
    defectId: '16968',
    startLine: 962,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16969',
    startLine: 962,
    message:
      "The value of the 't' expression and its persistent side effects shall be the same under all permitted evaluation orders",
    page: 0
  },
  {
    defectId: '16970',
    startLine: 962,
    message: 'operand has inappropriate essential type',
    page: 0
  },
  {
    defectId: '16971',
    startLine: 962,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16972',
    startLine: 962,
    message: 'Right hand operand of logical operator contains persistent side effects',
    page: 0
  },
  {
    defectId: '16973',
    startLine: 962,
    message:
      'The value of a composite expression shall not be cast to a different essential type category or a wider essential type.',
    page: 0
  },
  {
    defectId: '16974',
    startLine: 962,
    message: 'both operands have different essential type categories',
    page: 0
  },
  {
    defectId: '16975',
    startLine: 964,
    message: 'The body of the else-branch shall be a compound-statement.',
    page: 0
  }
]

/** 性能优化，取值更效率 */
export function getDefectItemMap(data: DefectItem[]) {
  const map: DefectItemMap = {}
  for (const item of data) {
    if (!map[item.startLine]) map[item.startLine] = []
    map[item.startLine].push(item)
  }
  return map
}

/*
例如：
 原数据

[
   {
        "defectId": "16970",
        "startLine": 962,
        "message": "operand has inappropriate essential type",
        "page": 0
    },
    {
        "defectId": "16971",
        "startLine": 962,
        "message": "both operands have different essential type categories",
        "page": 0
    },
    {
        "defectId": "16972",
        "startLine": 962,
        "message": "Right hand operand of logical operator contains persistent side effects",
        "page": 0
    },
    {
        "defectId": "16973",
        "startLine": 962,
        "message": "The value of a composite expression shall not be cast to a different essential type category or a wider essential type.",
        "page": 0
    },
    {
        "defectId": "16974",
        "startLine": 962,
        "message": "both operands have different essential type categories",
        "page": 0
    },
    {
        "defectId": "16975",
        "startLine": 964,
        "message": "The body of the else-branch shall be a compound-statement.",
        "page": 0
    }
]



转换后的数据

{
    "7": [
        {
            "defectId": "16273",
            "startLine": 7,
            "message": "Macro 'ltable_c' is unused",
            "page": 7
        }
    ],
    "75": [
        {
            "defectId": "16274",
            "startLine": 75,
            "message": "A generic selection should only be expanded from a macro",
            "page": 7
        },
        {
            "defectId": "16275",
            "startLine": 75,
            "message": "A default association shall appear as either the first or the last association of a generic selection",
            "page": 7
        },
        {
            "defectId": "16276",
            "startLine": 75,
            "message": "Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.",
            "page": 7
        }
    ],
    "81": [
        {
            "defectId": "16277",
            "startLine": 81,
            "message": "A macro parameter used as an operand to the # or ## operators, which is itself subject to further macro replacement, shall only be used as an operand to theses operators.",
            "page": 6
        },
        {
            "defectId": "16278",
            "startLine": 81,
            "message": "A generic selection should only be expanded from a macro",
            "page": 6
        },
        {
            "defectId": "16279",
            "startLine": 81,
            "message": "A default association shall appear as either the first or the last association of a generic selection",
            "page": 6
        },
        {
            "defectId": "16280",
            "startLine": 81,
            "message": "Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.",
            "page": 6
        }
    ],
    "84": [
        {
            "defectId": "16281",
            "startLine": 84,
            "message": "A generic selection should only be expanded from a macro",
            "page": 6
        },
        {
            "defectId": "16282",
            "startLine": 84,
            "message": "A default association shall appear as either the first or the last association of a generic selection",
            "page": 6
        },
        {
            "defectId": "16283",
            "startLine": 84,
            "message": "Expressions resulting from the expansion of macro parameters shall be enclosed in parentheses.",
            "page": 6
        }
    ]
}



*/
