import { flags } from '@oclif/command';
import { Protocol } from '@uniswap/router-sdk';
import { Percent, TradeType } from '@uniswap/sdk-core';
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import _ from 'lodash';
import { ID_TO_CHAIN_ID, NativeCurrencyName, nativeOnChain, parseAmount, } from '../../src';
import { TO_PROTOCOL } from '../../src/util/protocols';
import { BaseCommand } from '../base-command';
dotenv.config();
ethers.utils.Logger.globalLogger();
ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.DEBUG);
export class Quote extends BaseCommand {
    async run() {
        const { flags } = this.parse(Quote);
        const { tokenIn: tokenInStr, tokenOut: tokenOutStr, amount: amountStr, exactIn, exactOut, recipient, debug, topN, topNTokenInOut, topNSecondHop, topNWithEachBaseToken, topNWithBaseToken, topNWithBaseTokenInSet, topNDirectSwaps, maxSwapsPerPath, minSplits, maxSplits, distributionPercent, chainId: chainIdNumb, protocols: protocolsStr, forceCrossProtocol, deadline, } = flags;
        if ((exactIn && exactOut) || (!exactIn && !exactOut)) {
            throw new Error('Must set either --exactIn or --exactOut.');
        }
        let protocols = [];
        if (protocolsStr) {
            try {
                protocols = _.map(protocolsStr.split(','), (protocolStr) => TO_PROTOCOL(protocolStr));
            }
            catch (err) {
                throw new Error(`Protocols invalid. Valid options: ${Object.values(Protocol)}`);
            }
        }
        const chainId = ID_TO_CHAIN_ID(chainIdNumb);
        const log = this.logger;
        const tokenProvider = this.tokenProvider;
        const router = this.router;
        const tokenAccessor = await tokenProvider.getTokens([
            tokenInStr === 'ETHER' ? 'ETH' : tokenInStr,
            tokenOutStr,
        ]);
        // if the tokenIn str is 'ETH' or 'MATIC' or NATIVE_CURRENCY_STRING
        const tokenIn = tokenInStr in NativeCurrencyName
            ? nativeOnChain(chainId)
            : tokenAccessor.getTokenByAddress(tokenInStr);
        const tokenOut = tokenOutStr in NativeCurrencyName
            ? nativeOnChain(chainId)
            : tokenAccessor.getTokenByAddress(tokenOutStr);
        let swapRoutes;
        if (exactIn) {
            const amountIn = parseAmount(amountStr, tokenIn);
            swapRoutes = await router.route(amountIn, tokenOut, TradeType.EXACT_INPUT, recipient
                ? {
                    deadline: deadline || 100,
                    recipient,
                    slippageTolerance: new Percent(5, 10000),
                }
                : undefined, {
                blockNumber: this.blockNumber,
                v3PoolSelection: {
                    topN,
                    topNTokenInOut,
                    topNSecondHop,
                    topNWithEachBaseToken,
                    topNWithBaseToken,
                    topNWithBaseTokenInSet,
                    topNDirectSwaps,
                },
                maxSwapsPerPath,
                minSplits,
                maxSplits,
                distributionPercent,
                protocols,
                forceCrossProtocol,
            });
        }
        else {
            const amountOut = parseAmount(amountStr, tokenOut);
            swapRoutes = await router.route(amountOut, tokenIn, TradeType.EXACT_OUTPUT, recipient
                ? {
                    deadline: deadline || 100,
                    recipient,
                    slippageTolerance: new Percent(5, 10000),
                }
                : undefined, {
                blockNumber: this.blockNumber - 10,
                v3PoolSelection: {
                    topN,
                    topNTokenInOut,
                    topNSecondHop,
                    topNWithEachBaseToken,
                    topNWithBaseToken,
                    topNWithBaseTokenInSet,
                    topNDirectSwaps,
                },
                maxSwapsPerPath,
                minSplits,
                maxSplits,
                distributionPercent,
                protocols,
                forceCrossProtocol,
            });
        }
        if (!swapRoutes) {
            log.error(`Could not find route. ${debug ? '' : 'Run in debug mode for more info'}.`);
            return;
        }
        const { blockNumber, estimatedGasUsed, estimatedGasUsedQuoteToken, estimatedGasUsedUSD, gasPriceWei, methodParameters, quote, quoteGasAdjusted, route: routeAmounts, } = swapRoutes;
        this.logSwapResults(routeAmounts, quote, quoteGasAdjusted, estimatedGasUsedQuoteToken, estimatedGasUsedUSD, methodParameters, blockNumber, estimatedGasUsed, gasPriceWei);
    }
}
Quote.description = 'Uniswap Smart Order Router CLI';
Quote.flags = {
    ...BaseCommand.flags,
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    tokenIn: flags.string({ char: 'i', required: true }),
    tokenOut: flags.string({ char: 'o', required: true }),
    recipient: flags.string({ required: false }),
    amount: flags.string({ char: 'a', required: true }),
    exactIn: flags.boolean({ required: false }),
    exactOut: flags.boolean({ required: false }),
    protocols: flags.string({ required: false }),
    forceCrossProtocol: flags.boolean({ required: false, default: false }),
    deadline: flags.integer({ required: false }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGkvY29tbWFuZHMvcXVvdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQVksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQ0wsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsV0FBVyxHQUVaLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFbEUsTUFBTSxPQUFPLEtBQU0sU0FBUSxXQUFXO0lBa0JwQyxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sRUFDSixPQUFPLEVBQUUsVUFBVSxFQUNuQixRQUFRLEVBQUUsV0FBVyxFQUNyQixNQUFNLEVBQUUsU0FBUyxFQUNqQixP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